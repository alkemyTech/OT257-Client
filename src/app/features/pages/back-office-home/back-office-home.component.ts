import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Organization, Data } from "src/app/core/models/IOrganization";
import { OrgViewService } from 'src/app/core/services/org-view.service';
import { OrganizationEditService } from 'src/app/core/services/organization-edit.service';
import { SlideFormService } from 'src/app/core/services/slide-form.service';


@Component({
  selector: 'app-back-office-home',
  templateUrl: './back-office-home.component.html',
  styleUrls: ['./back-office-home.component.scss']
})
export class BackOfficeHomeComponent implements OnInit {

  homeForm!: FormGroup;
  organizationData!: Data;
  organizationId!: any;
  data!: Data;
  id: any = 1;
  listSlide: any = [];
  slide1!: any;

  constructor(private fb: FormBuilder,
    private orgService: OrgViewService,
    private organizationEditService: OrganizationEditService,
    private slideService: SlideFormService) { }

  ngOnInit(): void {
    this.editHomeForm();
    this.getTextForEdition();
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
    this.organizationEditService.getOrganizationDataById('1').subscribe({
      next: (response: Organization) => {
        this.data = response.data;
        console.log(this.data);
        this.homeForm.patchValue({
          welcomeText: this.data.welcome_text,
        });
      }
    });

  }

  onSubmit() {
    console.log(this.homeForm.value);
    this.organizationEditService.editOrganization(this.id, this.homeForm.value).subscribe({
      next: (response) => {
        this.data = response.data;
        alert("Organization edited successfully");
      }
    });
  }

  getSlides() {
    this.slideService.getSlide().subscribe({
      next: (response) => {
        this.listSlide = response.data;
      }
    });
  }

  select1(event: any) {
    const slide1Id = event.target.value;
    console.log(slide1Id);
    this.slideService.getOneSlide(slide1Id).subscribe({
      next: (response) => {
        this.slide1 = response.data;
        console.log(this.slide1);
        console.log(this.slide1.name);

        const slideObject1 = {
          id: slide1Id,
          name: this.slide1.name,
          order: 1,
        };
        this.slideService.updateSlide(slideObject1, slide1Id).subscribe({
          next: (response) => {
            console.log(response);
          }
        });
      }
    });




  }










}
