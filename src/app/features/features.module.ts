import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { HttpClientModule } from "@angular/common/http";
import { ContactFormComponent } from './pages/contact/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthFormComponent } from './pages/auth/auth-form/auth-form.component';
import { OrgViewComponent } from "./pages/organization/org-view/org-view.component";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SharedModule } from '../shared/shared.module';
import { MembersFormComponent } from './pages/backoffice/members/members-form/members-form.component';
import { EditFormComponent } from './pages/organization/edit-form/edit-form.component';
import { DashboardComponent } from './pages/backoffice/dashboard/dashboard.component';
import { UsersListComponent } from './pages/backoffice/users-list/users-list.component';


@NgModule({
  declarations: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    AuthFormComponent,
    ContactFormComponent,
    OrgViewComponent,
    MembersFormComponent,
    EditFormComponent,
    OrgViewComponent,
    DashboardComponent,
    UsersListComponent

  ],
  exports: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    RouterModule,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    SharedModule,
    SweetAlert2Module.forRoot(),
    SweetAlert2Module,
    SweetAlert2Module.forChild({ /* options */ }),
    
  ],
})
export class FeaturesModule { }
