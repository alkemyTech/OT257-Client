import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Organization, Data } from "src/app/core/models/IOrganization";
import { OrgViewService } from "src/app/core/services/org-view.service";
import { OrganizationEditService } from "src/app/core/services/organization-edit.service";
import { SlideFormService } from "src/app/core/services/slide-form.service";
import Swal from "sweetalert2";

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
  slide2!: any;
  slide3!: any;
  slide1Id!: any;
  slide2Id!: any;
  slide3Id!: any;
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
        this.homeForm.patchValue({
          welcomeText: this.data.welcome_text,
        });
      },
    });
  }

  onSubmitText() {
    this.organizationObject = {
      id: this.id,
      name: this.data.name,
      welcome_text: this.homeForm.value.welcomeText,
    };
    this.organizationEditService
      .editOrganization(this.id, this.organizationObject)
      .subscribe({
        next: (response) => {
          this.data = response.data;
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Se cambió el texto a: " + this.data.welcome_text,
            showConfirmButton: false,
            timer: 2000,
          });
        },
      });
  }

  // getSlides() {
  //   this.slideService.getSlide().subscribe({
  //     next: (response) => {
  //       this.listSlide = response.data;
  //     },
  //   });
  // }
  checkIfOrderExist(order: number) {
    const filterList = this.listSlide.filter((slide: any) => slide.order === order);
    if (filterList.length > 0) {
      const slideToBe0 = filterList[0];

      const objectToBe0 = {
        id: slideToBe0.id,
        name: slideToBe0.name,
        order: 0,
      };
      // this.slideService.updateSlide(objectToBe0, slideToBe0.id).subscribe({
      //   next: (response) => { },
      // });
    }
  }
  select1(event: any) {
    this.checkIfOrderExist(1);
    this.slide1Id = event.target.value;
    // this.slideService.getOneSlide(this.slide1Id).subscribe({
    //   next: (response) => {
    //     this.slide1 = response.data;
    //     const slideObject1 = {
    //       id: this.slide1Id,
    //       name: this.slide1.name,
    //       order: 1,
    //     };
      //   this.slideService.updateSlide(slideObject1, this.slide1Id).subscribe({
      //     next: (response) => {
      //       Swal.fire({
      //         position: "center",
      //         icon: "success",
      //         title: "Se cambió: " + this.slide1.name + " a orden 1",
      //         showConfirmButton: false,
      //         timer: 2000,
      //       });
      //     },
      //   });
      // },
    // });
  }
  select2(event: any) {
    this.checkIfOrderExist(2);
    this.slide2Id = event.target.value;
    // this.slideService.getOneSlide(this.slide2Id).subscribe({
    //   next: (response) => {
    //     this.slide2 = response.data;
    //     const slideObject2 = {
    //       id: this.slide2Id,
    //       name: this.slide2.name,
    //       order: 2,
    //     };
    //     this.slideService.updateSlide(slideObject2, this.slide2Id).subscribe({
    //       next: (response) => {
    //         Swal.fire({
    //           position: "center",
    //           icon: "success",
    //           title: "Se cambió: " + this.slide2.name + " a orden 2",
    //           showConfirmButton: false,
    //           timer: 2000,
    //         });
    //       },
    //     });
    //   },
    // });
  }
  select3(event: any) {
    this.checkIfOrderExist(3);
    this.slide3Id = event.target.value;
    // this.slideService.getOneSlide(this.slide3Id).subscribe({
    //   next: (response) => {
    //     this.slide3 = response.data;
    //     const slideObject3 = {
    //       id: this.slide3Id,
    //       name: this.slide3.name,
    //       order: 3,
    //     };
  //       this.slideService.updateSlide(slideObject3, this.slide3Id).subscribe({
  //         next: (response) => {
  //           Swal.fire({
  //             position: "center",
  //             icon: "success",
  //             title: "Se cambió: " + this.slide3.name + " a orden 3",
  //             showConfirmButton: false,
  //             timer: 2000,
  //           });
  //         },
  //       });
  //     },
  //   });
  }
}
