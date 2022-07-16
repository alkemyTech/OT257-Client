import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { HelpersService } from "src/app/core/services/helpers.service";
import { SlideFormService } from "src/app/core/services/slide-form.service";

@Component({
  selector: "app-slides-form",
  templateUrl: "./slides-form.component.html",
  styleUrls: ["./slides-form.component.scss"],
})
export class SlidesFormComponent implements OnInit {
  // variable to contain property from ckeditor
  public Editor = ClassicEditor;
  // variable containing the form properties
  form: FormGroup;

  error: boolean = false;
  orderError: boolean = false;
  messageError: string = "";
  listSlide: any;
  viewImageMin: any;
  slide: any;
  modified: any;

  constructor(
    private formBuilder: FormBuilder,
    private helpers: HelpersService,
    private slideService: SlideFormService,
    private activateRoute: ActivatedRoute
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
    this.slideService.getSlide().subscribe({
      next: (data) => {
        console.log("Servicio get exito");
        console.log(data.data);
        this.listSlide = data.data;
      },
      error: (error) => {
        console.log("servicio get error");
        console.log(error);
      },
    });

    this.modifiedSlide();
  }

  orderUnique() {
    this.orderError = false;
    console.log("order valid?");
    console.log(this.form.get("order")?.valid);
    if (this.form.get("order")?.valid) {
      console.log("valor del input que contiene el orden");
      console.log(this.form.get("order")?.value);
      if (!this.modified || this.modified && this.form.get('order')?.value != this.slide.order) {
        for (let i = 0; i < this.listSlide.length; i++) {
          console.log(this.listSlide[i].order);
          if (this.listSlide[i].order == this.form.get("order")?.value) {
            this.orderError = true;
          }
        }
      }
    }
  }

  fileChange(e: any) {
    e.preventDefault();
    console.log("valor del evento cuando se selecciona un archivo");
    console.log(e);
    if (e.target.files.length != 0) {
      if (!this.helpers.fileExtensionCheck(e)) {
        this.viewImageMin = "";
        this.error = true;
        this.messageError = "FORMATO INCORRECTO: Se admite png y jpg";
        this.form.get("image")?.setErrors({ incorrect: true });
        console.log("valor del input image");
        console.log(this.form.get("image"));
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
        this.slideService
          .updateSlide(this.form.value, this.slide.id)
          .subscribe({
            next: (data) => {
              alert("Usuario modificado con exito");
              console.log(data);
              this.slide = data.data;
            },
            error: (err) => {
              console.log(err);
            },
          });
      } else {
        this.form.markAllAsTouched();
      }
    } else {
      console.log("Valor del form cuando se presiona guardar");
      console.log(this.form.value);
      console.log(this.form.valid);
      if (this.form.valid) {
        this.slideService.saveSlide(this.form.value).subscribe({
          next: (data) => {
            console.log("Post con exito");
            console.log(data);
          },
          error: (error) => {
            console.log("Post con error");
            console.log(error);
          },
        });
      } else {
        this.form.markAllAsTouched();
      }
    }
  }

  modifiedSlide() {
    this.activateRoute.params.subscribe((idRoute) => {
      let id = idRoute["id"];
      console.log("Valor id: " + id);
      if (id) {
        this.modified = true;
        this.slideService.getOneSlide(id).subscribe({
          next: (data) => {
            this.slide = data.data;
            this.form.setValue({
              name: this.slide.name,
              description: this.slide.description,
              order: this.slide.order,
              image: this.slide.image,
            });
            this.viewImageMin = this.slide.image;
          },
          error: (error) => {
            console.log(error);
          },
        });
      } else {
        this.modified = false;
      }
    });
  }
}
