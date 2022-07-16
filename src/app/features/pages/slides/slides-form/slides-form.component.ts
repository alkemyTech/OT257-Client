import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
  messageError:string="";
  listSlide : any;

  constructor(
    private formBuilder: FormBuilder,
    private helpers: HelpersService,
    private slideService: SlideFormService
  ) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: ["", [Validators.required]],
      order: ["", [Validators.required]],
      image: ["", []],
      userId: ["", []],
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
    this.slideService.getSlide().subscribe({next:(data)=>{
      console.log("Servicio get exito");
      this.listSlide = data;
    },error:(error)=>{
      console.log("servicio get error");
      console.log(error);
    }})
  }

  fileChange(e: any) {
    e.preventDefault();
    console.log("valor del evento cuando se selecciona un archivo");
    console.log(e);
    if(e.target.files.length != 0){
      if (!this.helpers.fileExtensionCheck(e)) {
        this.error = true;
        this.messageError = "FORMATO INCORRECTO: Se admite png y jpg";
        console.log("valor del input image");
        console.log(this.form.get("image"));
      }else {
        this.error = false;
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          this.form.get('image')?.setValue(reader.result);
        };
      }
    }else{
      this.error = true;
        this.messageError = "Campo Obligatorio";
        this.form.get('image')?.reset;
    }
  }

  sendForm() {
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
