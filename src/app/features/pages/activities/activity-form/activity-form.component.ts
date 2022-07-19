import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as ClassicEditorBuild from "@ckeditor/ckeditor5-build-classic";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ActivitiesService } from "../../../../core/services/activity/activities.service";
import { Activity } from "../../../../core/models/activity.model";
import Swal from "sweetalert2";
import { ActivatedRoute, Router } from "@angular/router";
import { HelpersService } from '../../../../core/services/helpers.service';

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
  id!: any;
  data: any;
  description: any;
  formData!: FormGroup;
  base64textString!: string;

  constructor(
    private fb: FormBuilder,
    private activitiesService: ActivitiesService,
    private helpers: HelpersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.id = this.route.snapshot.paramMap.get("id");
    this.id = this.id === null ? 0 : this.id;

    if (this.id > 0) {
      this.getActivity(this.id);
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
      name: ["", [Validators.required, Validators.minLength(5)]],
      description: [""],
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
        description: this.formData.get("description")!.value
      };

      if (this.id > 0) {
        if (!this.formData.value.image) {
          delete data.image;
        }
        this.updateActivity(data, this.id);
      } else {
        this.saveActivity(data);
      }
    }
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

  //update activity
  updateActivity(activity: Activity, id: number) {
    this.activitiesService.updateActivity(this.id, activity).subscribe(
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

  /**
   * get Activity by id
   * 
   * @param id activity id
   */
  getActivity(id: number) {
    this.activitiesService.getActivity(id).subscribe((result: any) => {
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
      if (!this.formData.value.image || !this.helpers.fileExtensionCheck(this.event)) {
        this.formData.controls["image"].setErrors({ incorrect: true });
        return false;
      }
    }

    return true;
  }
}
