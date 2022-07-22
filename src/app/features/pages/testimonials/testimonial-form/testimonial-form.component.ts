import { Component, OnInit } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HelpersService } from "../../../../core/services/helpers.service";
import { Testimonial } from "../../../../core/models/testimonial.model";
import Swal from "sweetalert2";
import { TestimonialService } from "../../../../core/services/testimonial/testimonial.service";

@Component({
  selector: "app-testimonial-form",
  templateUrl: "./testimonial-form.component.html",
  styleUrls: ["./testimonial-form.component.scss"],
})
export class TestimonialFormComponent implements OnInit {
  Editor = ClassicEditor;
  event!: any;
  imgBase64: any;
  id!: any;
  data: any;
  description: any;
  formData!: FormGroup;
  base64textString!: string;
  buttonText: any = "CREAR TESTIMONIO";
  titleText: any = "CREAR NUEVO TESTIMONIO";


  constructor(
    private fb: FormBuilder,
    private testimonialServive: TestimonialService,
    private helpers: HelpersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.id = this.route.snapshot.paramMap.get("id");
    this.id = this.id === null ? 0 : this.id;

    if (this.id > 0) {
      this.getTestimonial(this.id);
      this.buttonText = "ACTUALIZAR TESTIMONIO";
      this.titleText = "ACTUALIZAR TESTIMONIO";

    }
  }

  /**
   * get file selected
   *
   * @param event file
   */
  onFileSelect(event: any) {
    this.event = event;
    if (this.event.target.files[0] !== undefined) {
      this.imgToBase64(this.event.target.files[0]);
    } else {
      this.imgBase64 = null;
    }
  }

  /**
   * init form
   */
  createForm() {
    this.formData = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: ["", Validators.required],
      image: [""],
    });
  }

  validation(input: any) {
    return (
      this.formData.controls[input].errors &&
      this.formData.controls[input].touched
    );
  }

  onSubmit() {
    if (this.validateForm()) {
      let data = {
        name: this.formData.get("name")!.value,
        image: this.imgBase64,
        description: this.formData.get("description")!.value,
      };

      if (this.id > 0) {
        if (!this.formData.value.image) {
          delete data.image;
        }
        this.updateTestimonial(data, this.id);
      } else {
        this.saveTestimonial(data);
      }
    }
  }

  //save testimonial
  saveTestimonial(testimonial: Testimonial) {
    this.testimonialServive.createTestimonial(testimonial).subscribe(
      (result: any) => {
        //activity saved successfully
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Testimonio guardada correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        this.formData.reset();
        this.imgBase64 = null;
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: error.error.message,
        });
      }
    );
  }

  //update testimonial
  updateTestimonial(testimonial: Testimonial, id: number) {
    this.testimonialServive.updateTestimonial(this.id, testimonial).subscribe(
      (result: any) => {
        //activity saved successfully
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Testimonio actualizado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        this.formData.reset();
        this.imgBase64 = null;

      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: error.error.message,
        });
      }
    );
  }

  /**
   * get testimonial by id
   *
   * @param id testimonial id
   */
  getTestimonial(id: number) {
    this.testimonialServive.getTestimonial(id).subscribe((result: any) => {
      this.data = result.data;

      this.formData.controls["name"].setValue(this.data.name);
      this.formData.controls["description"].setValue(this.data.description);
      this.imgBase64 = this.data.image;
    });
  }

  /**
   * file reader image
   *
   * @param file
   */
  imgToBase64(file: any) {
    if (file) {
      const reader = new FileReader();
      reader.onload = this.toBase64.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  /**
   * get base64 image
   *
   * @param e
   */
  toBase64(e: any) {
    this.imgBase64 = "data:image/png;base64," + btoa(e.target.result);
  }

  /**
   * return form is valid
   * @returns boolean
   */
  validateForm(): boolean {
    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return false;
    }

    if (this.imgBase64 === undefined || this.imgBase64 === null) {
      //validate image field
      if (
        !this.formData.value.image ||
        !this.helpers.fileExtensionCheck(this.event)
      ) {
        this.formData.controls["image"].setErrors({ incorrect: true });
        return false;
      }
    }

    return true;
  }
}
