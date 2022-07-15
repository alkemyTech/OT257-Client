import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { HelpersService } from "src/app/core/services/helpers.service";

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  styleUrls: ["./edit-form.component.scss"],
})
export class EditFormComponent implements OnInit {
  Editor = ClassicEditor;
  form!: FormGroup;
  event!: any;

  constructor(private fb: FormBuilder, private helpers: HelpersService) { }

  ngOnInit(): void {
    this.editForm();
  }

  editForm() {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      logo: ["", [Validators.required]],
      longDescription: ["", [Validators.required, Validators.minLength(20)]],
      shortDescription: ["", [Validators.required, Validators.minLength(10)]],
      facebook: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
          ),
        ],
      ],
      linkedin: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
          ),
        ],
      ],
      instagram: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
          ),
        ],
      ],
      twitter: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
          ),
        ],
      ],
    });
  }

  invalidInput(input: string) {
    return this.form.get(input)?.invalid && this.form.get(input)?.touched;
  }

  onFileSelected(event: any) {
    this.event = event;
  }

  onSubmit() {
    if (!this.helpers.fileExtensionCheck(this.event)) {
      this.form.controls["logo"].setErrors({ 'incorrect': true });

      console.log(this.form.value);

      if (this.form.invalid) {
        return Object.values(this.form.controls).forEach((control) => {
          control.markAsTouched();
        });
      }
    }
  }
}
