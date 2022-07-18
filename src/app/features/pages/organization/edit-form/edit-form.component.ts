import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Organization, Data } from "src/app/core/models/IOrganization";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  styleUrls: ["./edit-form.component.scss"],
})
export class EditFormComponent implements OnInit {
  Editor = ClassicEditor;
  form!: FormGroup;
  event!: any;
  data!: Data;
  file!: any;
  organizationId!: any;
  logoView!: any | null;
  messageError!: string;

  constructor(private fb: FormBuilder,

    private route: ActivatedRoute,) { }

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

  }
}
