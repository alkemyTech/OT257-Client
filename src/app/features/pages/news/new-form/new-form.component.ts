import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoriesService } from "src/app/services/categories/categories.service";
import { NewsService } from "src/app/services/news/news.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Swal from "sweetalert2";

@Component({
  selector: "app-new-form",
  templateUrl: "./new-form.component.html",
  styleUrls: ["./new-form.component.scss"],
})
export class NewFormComponent implements OnInit {
  public Editor = ClassicEditor;
  idNew!: any;
  categories: any;
  form!: FormGroup;
  img = "";
  new = "";
  file!: any;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private categoriesService: CategoriesService,
    private fb: FormBuilder
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

    this.newsService.getNew(this.idNew).subscribe((result: any) => {
      this.new = result.data;
      this.cargarDataForm(this.new);
    });
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
      name: ["", [Validators.required, Validators.minLength(5)]],
      image: [null],
      category_id: ["", [Validators.required]],
      content: ["", [Validators.required]],
    });

    this.form.get("image")?.valueChanges.subscribe((value) => {
      if (value !== null && value !== "") {
        this.imgToBase64(this.file);
      }
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

  updateNew() {
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

    this.newsService
      .updateNew(this.idNew, this.form.value)
      .subscribe((resp) => {
        Swal.fire("Actualizacion", "Se actualizo Correctamente", "success");
      });
  }
}
