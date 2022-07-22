import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Organization, Data } from "src/app/core/models/IOrganization";
import { OrgViewService } from "src/app/core/services/org-view.service";
import { OrganizationEditService } from "src/app/core/services/organization-edit.service";
import { SlideFormService } from "src/app/core/services/slide-form.service";

@Component({
  selector: "app-back-office-home",
  templateUrl: "./back-office-home.component.html",
  styleUrls: ["./back-office-home.component.scss"],
})
export class BackOfficeHomeComponent implements OnInit {
  homeForm!: FormGroup;
  data!: Data;
  id: any = 1;
  listSlide: any = [];
  slide1!: any;
  slide1Id!: any;
  organizationObject!: any;

  constructor(
    private fb: FormBuilder,
    private orgService: OrgViewService,
    private organizationEditService: OrganizationEditService,
    private slideService: SlideFormService
  ) { }

  ngOnInit(): void {
    this.getTextForEdition();
    this.editHomeForm();
    this.getSlides();
  }

  editHomeForm() {
    this.homeForm = this.fb.group({
      welcomeText: ["", [Validators.required, Validators.minLength(20)]],
    });
  }

  invalidInput(input: string) {
    return this.homeForm.get(input)?.invalid && this.homeForm.get(input)?.touched;
  }

  getTextForEdition() {
    this.organizationEditService.getOrganizationDataById(this.id).subscribe({
      next: (response: Organization) => {
        this.data = response.data;
        console.log(this.data);
        this.homeForm.patchValue({
          welcomeText: this.data.welcome_text,
        });
      },
    });
  }

  onSubmitText() {
    console.log(this.homeForm.value);
    this.organizationObject = {
      id: this.id,
      name: this.data.name,
      welcome_text: this.homeForm.value.welcomeText
    };
    this.organizationEditService
      .editOrganization(this.id, this.organizationObject)
      .subscribe({
        next: (response) => {
          this.data = response.data;
          alert("Se cambió welcome text a: " + this.data.welcome_text);
        },
      });

  }

  getSlides() {
    this.slideService.getSlide().subscribe({
      next: (response) => {
        this.listSlide = response.data;
      },
    });
  }

  select1(event: any) {
    this.slide1Id = event.target.value;
    this.slideService.getOneSlide(this.slide1Id).subscribe({
      next: (response) => {
        this.slide1 = response.data;

        const slideObject1 = {
          id: this.slide1Id,
          name: this.slide1.name,
          order: 1,
        };
        this.slideService.updateSlide(slideObject1, this.slide1Id).subscribe({
          next: (response) => {
            console.log(response);
            alert("Se cambió: " + this.slide1.name + " a orden 1");
          },
        });
      },
    });
  }
}
