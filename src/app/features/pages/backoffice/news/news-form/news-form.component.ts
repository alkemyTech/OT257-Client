import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { CategoriesService } from "src/app/core/services/categories/categories.service";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Router } from "@angular/router";
import { NewsService } from "src/app/core/services/news/news.service";

import { HelpersService } from "src/app/core/services/helpers.service";
import Swal from "sweetalert2";
import * as alerts from "src/app/shared/components/layouts/alerts/alerts";
import { Store } from "@ngrx/store";
import * as actions from "../../../../../state/actions/news.actions";

@Component({
  selector: "app-news-form",
  templateUrl: "./news-form.component.html",
  styleUrls: ["./news-form.component.scss"],
})
export class NewsFormComponent implements OnInit {
  public Editor = ClassicEditor;
  form!: FormGroup;
  categories: any;
  img: string = "";
  file!: any;
  event!: any;
  idNew!: any;
  new = "";
  formData!: any;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private newsService: NewsService,
    private fb: FormBuilder,
    private router: Router,
    private helpers: HelpersService,
    private store: Store
  ) {
    this.route.paramMap.subscribe((params) => {
      this.idNew = params.get("id");
    });

    this.crearFormulario();
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((resp: any) => {
      this.categories = resp.data;
    });

    if (this.idNew) {
      this.newsService.getNew(this.idNew).subscribe((result: any) => {
        this.new = result.data;
        this.cargarDataForm(this.new);
      });
    }
  }

  get nombreNoValido() {
    return this.form.get("name")?.invalid && this.form.get("name")?.touched;
  }

  get categoriaNoValido() {
    return (
      this.form.get("category_id")?.invalid &&
      this.form.get("category_id")?.touched
    );
  }
  get contentNoValido() {
    return (
      this.form.get("content")?.invalid && this.form.get("content")?.touched
    );
  }

  get imageNoValido() {
    return this.form.get("image")?.invalid && this.form.get("image")?.touched;
  }

  crearFormulario() {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      category_id: ["", [Validators.required]],
      image: ["", [Validators.required]],
      content: ["", [Validators.required]],
    });
  }

  private imgToBase64(file: any) {
    if (file) {
      const reader = new FileReader();
      reader.onload = this.toBase64.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  toBase64(e: any) {
    this.img = "data:image/png;base64," + btoa(e.target.result);
  }

  onFileSelected(event: any) {
    this.event = event;
    this.file = event.target.files[0];
    this.imgToBase64(this.file);
  }

  cargarDataForm(dato: any) {
    this.img = dato.image;
    this.form.setValue({
      name: dato.name,
      image: null,
      category_id: dato.category_id,
      content: dato.content,
    });
  }

  update() {
    if (this.form.value.image) {
      this.form.value.image = this.img;
    } else {
      delete this.form.value.image;
    }

    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    }

    if (this.helpers.fileExtensionCheck(this.event)) {
      this.form.controls["image"].setErrors({ imageNoValido: true });
    }

    this.formData = this.form.value;
    this.formData.id = this.idNew;
    this.store.dispatch(
      actions.updateNews({ id: this.idNew, data: this.formData })
    );

    setTimeout(() => {
      this.router.navigate([`/backoffice/news/`]);
    }, 1000);
  }

  createNew() {
    if (this.idNew) {
      this.update();
    } else {
      this.create();
    }
  }

  create() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    }

    if (this.helpers.fileExtensionCheck(this.event)) {
      this.form.controls["image"].setErrors({ imageNoValido: true });
    }

    if (this.form.value.image != "") {
      this.form.value.image = this.img;
    } else {
      delete this.form.value.image;
    }

    this.store.dispatch(actions.createNews(this.form.value));
    setTimeout(() => {
      this.router.navigate([`/backoffice/news/`]);
    }, 1000);
    
  }
}
