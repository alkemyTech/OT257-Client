import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Observable } from "rxjs";
import { HelpersService } from "src/app/core/services/helpers.service";
import { SlideFormService } from "src/app/core/services/slide-form.service";
import { selectSlideList } from "src/app/state/selectors/slider.selectors";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { loadSliders, postSlider } from "src/app/state/actions/slider.actions";

@Component({
  selector: "app-slides-form",
  templateUrl: "./slides-form.component.html",
  styleUrls: ["./slides-form.component.scss"],
})
export class SlidesFormComponent implements OnInit {
  public Editor = ClassicEditor;
  form: FormGroup;

  listSlide$: Observable<any> = new Observable();

  error: boolean = false;
  orderError: boolean = false;
  messageError: string = "";
  viewImageMin: any;
  slide: any;
  modified: any;

  constructor(
    private formBuilder: FormBuilder,
    private helpers: HelpersService,
    private slideService: SlideFormService,
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
    this.store.dispatch(loadSliders());
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
        this.store.dispatch(postSlider(this.form.value));
        this.router.navigate(["backoffice/slider"]);
      } else {
        this.form.markAllAsTouched();
      }
    } else {
      if (this.form.valid) {
        this.store.dispatch(postSlider(this.form.value));
        this.router.navigate(["backoffice/slider"]);
        // this.slideService.saveSlide(this.form.value).subscribe(
        //   (data) => {
        //     alert("Slide guardado con exito");
        //   }
        // );
      } else {
        this.form.markAllAsTouched();
      }
    }
  }

  modifiedSlide() {
    this.activateRoute.params.subscribe((idRoute) => {
      let id = idRoute["id"];
      if (id) {
        this.modified = true;
        // this.slideService.getOneSlide(id).subscribe(
        //   (data) => {
        //     this.slideObject = data;
        //     this.slide = this.slideObject.data;
        //     this.form.setValue({
        //       name: this.slide.name,
        //       description: this.slide.description,
        //       order: this.slide.order,
        //       image: this.slide.image,
        //     });
        //     this.viewImageMin = this.slide.image;
        //   });
      } else {
        this.modified = false;
      }
    });
  }
}
