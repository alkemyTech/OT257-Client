import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Observable } from "rxjs";
import { HelpersService } from "src/app/core/services/helpers.service";
import {
  selectOneSlide,
  selectSlideList,
} from "src/app/state/selectors/slider.selectors";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import {
  getOneSlide,
  loadSliders,
  postSlider,
  updateSlider,
} from "src/app/state/actions/slider.actions";

@Component({
  selector: "app-slides-form",
  templateUrl: "./slides-form.component.html",
  styleUrls: ["./slides-form.component.scss"],
})
export class SlidesFormComponent implements OnInit {
  public Editor = ClassicEditor;
  form: FormGroup;

  listSlide$: Observable<any> = new Observable();
  slide$: Observable<any> = new Observable();

  updateSliderId: number = 0;
  error: boolean = false;
  orderError: boolean = false;
  messageError: string = "";
  viewImageMin: any;
  modified: any;

  constructor(
    private formBuilder: FormBuilder,
    private helpers: HelpersService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: ["", [Validators.required]],
      order: ["", [Validators.required]],
      image: ["", [Validators.required]],
    });
  }

  get Name() {
    return this.form.get("name");
  }

  get Description() {
    return this.form.get("description");
  }

  get Order() {
    return this.form.get("order");
  }

  get Image() {
    return this.form.get("image");
  }

  ngOnInit(): void {
    this.listSlide$ = this.store.select(selectSlideList);
    this.modifiedSlide();
  }

  orderUnique() {
    this.orderError = false;
    if (this.form.get("order")?.valid) {
      if (this.form.get("order")?.value !== 0) {
        this.listSlide$.forEach((slide) => {
          for (let orderUnique of slide) {
            if (orderUnique.order === this.form.get("order")?.value) {
              this.orderError = true;
            }
          }
        });
      }
    }
  }

  fileChange(e: any) {
    e.preventDefault();
    if (e.target.files.length != 0) {
      if (!this.helpers.fileExtensionCheck(e)) {
        this.viewImageMin = "";
        this.error = true;
        this.messageError = "FORMATO INCORRECTO: Se admite png y jpg";
        this.form.get("image")?.setErrors({ incorrect: true });
      } else {
        this.error = false;
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          this.form.get("image")?.setValue(reader.result);
          this.viewImageMin = this.form.value.image;
        };
      }
    } else {
      this.viewImageMin = "";
      this.error = true;
      this.form.get("image")?.setErrors({ required: true });
    }
  }

  sendForm() {
    if (this.modified) {
      if (this.form.valid) {
        this.store.dispatch(
          updateSlider({ id: this.updateSliderId, slider: this.form.value})
        );
        this.router.navigate(["backoffice/slider"]);
      } else {
        this.form.markAllAsTouched();
      }
    } else {
      if (this.form.valid) {
        this.store.dispatch(postSlider(this.form.value));
        this.router.navigate(["backoffice/slider"]);
      } else {
        this.form.markAllAsTouched();
      }
    }
  }

  modifiedSlide() {
    this.activateRoute.params.subscribe((idRoute) => {
      let id = idRoute["id"];
      this.updateSliderId = id;
      if (id) {
        this.modified = true;
        this.store.dispatch(getOneSlide({ id }));
        this.slide$ = this.store.select(selectOneSlide);
        this.slide$.forEach((slide) => {
          this.form.setValue({
            name: slide.name,
            description: slide.description,
            order: slide.order,
            image: slide.image,
          });
          this.viewImageMin = slide.image;
        });
      } else {
        this.modified = false;
      }
    });
  }
}
