import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Organization, Data } from "src/app/core/models/IOrganization";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ActivatedRoute } from "@angular/router";
import { OrganizationEditService } from "src/app/core/services/organization-edit.service";

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

  constructor(
    private fb: FormBuilder,
    private OrganizationEditService: OrganizationEditService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.organizationId = params.get("id");
    });
    this.editForm();
    this.getInfoForEdition();
  }

  editForm() {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      logo: [""],
      longDescription: ["", [Validators.required, Validators.minLength(20)]],
      shortDescription: ["", [Validators.required, Validators.minLength(10)]],
      facebook: [
        "",
        [
          Validators.required,
          Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"),
        ],
      ],
      linkedin: [
        "",
        [
          Validators.required,
          Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"),
        ],
      ],
      instagram: [
        "",
        [
          Validators.required,
          Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"),
        ],
      ],
      twitter: [
        "",
        [
          Validators.required,
          Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"),
        ],
      ],
    });
  }

  invalidInput(input: string) {
    return this.form.get(input)?.invalid && this.form.get(input)?.touched;
  }

  private imgToBase64(file: any) {
    if (file) {
      const reader = new FileReader();
      reader.onload = this.toBase64.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  toBase64(e: any) {
    this.logoView = "data:image/png;base64," + btoa(e.target.result);
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.imgToBase64(this.file);
    this.form.value.logo = this.logoView;
  }

  getInfoForEdition(): void {
    this.OrganizationEditService.getOrganizationDataById(this.organizationId).subscribe({
      next: (response: Organization) => {
        this.data = response.data;
        this.form.setValue({
          name: this.data.name,
          logo: this.data.logo,
          longDescription: this.data.long_description,
          shortDescription: this.data.short_description,
          facebook: this.data.facebook_url,
          linkedin: this.data.linkedin_url,
          instagram: this.data.instagram_url,
          twitter: this.data.twitter_url,
        });
        this.logoView = this.data.logo;
      },
    });
  }

  onSubmit() {
    if (this.form.value.logo) {
      this.form.value.logo = this.logoView;
    }

    this.OrganizationEditService.editOrganization(
      this.organizationId,
      this.form.value
    ).subscribe({
      next: (response: Data) => {
        alert("Organization edited successfully");
      },
    });
  }
}
