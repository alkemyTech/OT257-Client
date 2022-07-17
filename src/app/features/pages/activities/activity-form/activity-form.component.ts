import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as ClassicEditorBuild from "@ckeditor/ckeditor5-build-classic";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ActivitiesService } from "../../../../core/services/activities.service";
import { Activity } from "../../../../core/models/activity.model";
import { HelpersService } from "../../../../core/helpers.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-activity-form",
  templateUrl: "./activity-form.component.html",
  styleUrls: ["./activity-form.component.scss"],
})
export class ActivityFormComponent implements OnInit {
  title = "base-ong-angular-client";
  Editor = ClassicEditor;
  event!: any;
  imgBase64: any;

  formData!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activitiesService: ActivitiesService,
    private helpers: HelpersService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formData = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      description: [""],
      image: ["", Validators.required],
    });
  }

  validation(input: any) {
    return (
      this.formData.controls[input].errors &&
      this.formData.controls[input].touched
    );
  }

  onSubmit() {
    if (this.formData.invalid) {
      this.formData.markAllAsTouched();
      return;
    }
    if (!this.helpers.fileExtensionCheck(this.event)) {
      this.formData.controls["image"].setErrors({ incorrect: true });
      return;
    }

    let activity = new Activity();
    activity.name = this.formData.get("name")!.value;
    activity.image = this.imgBase64;
    activity.description = this.formData.get("description")!.value;
    //save data
    this.saveActivity(activity);
  }

  //save activity
  saveActivity(activity: Activity) {
    this.activitiesService.createActivity(activity).subscribe(
      (result: any) => {
        //activity saved successfully
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Actividad guardada correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        this.formData.reset();
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: error.error.message,
        });
      }
    );
  }

  //convert image
  onFileSelect(event: any) {
    this.event = event;
    if (event !== null) {
      this.imgToBase64(this.event.target.files[0]);
    }
  }

  imgToBase64(file: any) {
    if (file) {
      const reader = new FileReader();
      reader.onload = this.toBase64.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  toBase64(e: any) {
    this.imgBase64 = "data:image/png;base64," + btoa(e.target.result);
  }
}
