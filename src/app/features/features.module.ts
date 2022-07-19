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
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NewFormComponent } from './pages/news/new-form/new-form.component';
import { AuthFormComponent } from './pages/auth/auth-form/auth-form.component';
import { ContactFormComponent } from './pages/contact/contact-form/contact-form.component';
import { EditFormComponent } from './pages/organization/edit-form/edit-form.component';
import { OrgViewComponent } from "./pages/organization/org-view/org-view.component";

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
    NewFormComponent,
    AuthFormComponent,
    ContactFormComponent,
    OrgViewComponent,
    EditFormComponent,

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
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
})
export class FeaturesModule { }
