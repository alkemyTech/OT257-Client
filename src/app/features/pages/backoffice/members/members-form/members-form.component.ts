import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { CategoriesService } from "src/app/services/categories/categories.service";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Router } from "@angular/router";
import { MembersService } from "src/app/services/members/members.service";

import { HelpersService } from "src/app/core/services/helpers.service";

@Component({
  selector: "app-members-form",
  templateUrl: "./members-form.component.html",
  styleUrls: ["./members-form.component.scss"],
})
export class MembersFormComponent implements OnInit {
  public Editor = ClassicEditor;
  form!: FormGroup;
  categories: any;
  img: string = "";
  file!: any;
  event!: any;

  constructor(
    private categoriesService: CategoriesService,
    private membersService: MembersService,
    private fb: FormBuilder,
    private router: Router,
    private helpers: HelpersService
  ) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

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
      name: ["", [Validators.required, Validators.minLength(4)]],
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

  createMember() {
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
    this.membersService.createMember(this.form.value).subscribe((resp: any) => {
      this.router.navigate([`/member/${resp.data.id}`]);
    });
  }
}
