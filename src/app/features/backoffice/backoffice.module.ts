import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { OrgViewComponent } from "./pages/organization/org-view/org-view.component";
import { MembersFormComponent } from "./pages/members/members-form/members-form.component";
import { EditFormComponent } from "./pages/organization/edit-form/edit-form.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { BackOfficeHomeComponent } from "./pages/home/back-office-home.component";
import { ListActiviyComponent } from "./pages/activities/list-activiy/list-activiy.component";
import { UsersListComponent } from "./pages/users/users-list/users-list.component";
import { NewsComponent } from "./pages/news/news/news.component";
import { MembersComponent } from "./pages/members/members/members.component";
import { ListSlidesComponent } from "./pages/slides/list-slides/list-slides/list-slides.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { RouterModule } from "@angular/router";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "src/app/shared/shared.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BackofficeRoutingModule } from "./backoffice-routing.module";

@NgModule({
  declarations: [
    ActivityFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    OrgViewComponent,
    MembersFormComponent,
    EditFormComponent,
    DashboardComponent,
    BackOfficeHomeComponent,
    ListActiviyComponent,
    UsersListComponent,
    NewsComponent,
    MembersComponent,
    ListSlidesComponent,
    UserFormComponent,
  ],
  exports: [
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    MatProgressSpinnerModule,
    BackofficeRoutingModule,
  ],
})
export class BackofficeModule {}
