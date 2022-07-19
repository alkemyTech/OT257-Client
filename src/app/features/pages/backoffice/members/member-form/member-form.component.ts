import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MembersService } from "src/app/services/members/members.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { HelpersService } from "src/app/core/services/helpers.service";

import Swal from "sweetalert2";

@Component({
  selector: "app-member-form",
  templateUrl: "./member-form.component.html",
  styleUrls: ["./member-form.component.scss"],
})
export class MemberFormComponent implements OnInit {
  public Editor = ClassicEditor;
  idMember!: any;
  form!: FormGroup;
  img = "";
  member = "";
  file!: any;
  event!: any;

  constructor(
    private route: ActivatedRoute,
    private membersService: MembersService,
    private fb: FormBuilder,
    private helpers: HelpersService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.idMember = params.get("id");
    });
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.membersService.getMember(this.idMember).subscribe((result: any) => {
      this.member = result.data;
      this.cargarDataForm(this.member);
    });
  }

  get nombreNoValido() {
    return this.form.get("name")?.invalid && this.form.get("name")?.touched;
  }

  get descriptionNoValido() {
    return (
      this.form.get("description")?.invalid &&
      this.form.get("description")?.touched
    );
  }

  get imageNoValido() {
    return this.form.get("image")?.invalid && this.form.get("image")?.touched;
  }

  get facebookUrlNoValido() {
    return (
      this.form.get("facebookUrl")?.invalid &&
      this.form.get("facebookUrl")?.touched
    );
  }

  get linkedinUrlNoValido() {
    return (
      this.form.get("linkedinUrl")?.invalid &&
      this.form.get("linkedinUrl")?.touched
    );
  }

  crearFormulario() {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      image: ["", [Validators.required]],
      facebookUrl: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
          ),
        ],
      ],
      linkedinUrl: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
          ),
        ],
      ],
      description: ["", [Validators.required]],
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
    this.event = event;
    this.file = event.target.files[0];
    this.imgToBase64(this.file);
  }

  cargarDataForm(dato: any) {
    this.img = dato.image;
    this.form.setValue({
      name: dato.name,
      image: null,
      facebookUrl: dato.facebookUrl,
      linkedinUrl: dato.linkedinUrl,
      description: dato.description,
    });
  }

  updateMember() {
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

    this.membersService
      .updateMember(this.idMember, this.form.value)
      .subscribe((resp) => {
        Swal.fire("Actualizacion", "Se actualizo Correctamente", "success");
      });
  }
}
