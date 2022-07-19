import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { OrgViewComponent } from "./pages/organization/org-view/org-view.component";
import { ContactFormComponent} from './pages/contact/contact-form/contact-form.component';
import { MembersFormComponent } from "./pages/backoffice/members/members-form/members-form.component";
import { EditFormComponent } from "./pages/organization/edit-form/edit-form.component";
import { TestimonialFormComponent } from './pages/testimonials/testimonial-form/testimonial-form.component';

const routes: Routes = [
 { 
    path: "actividades", 
    component: ActivityFormComponent 
  },
  { 
    path: "actividades/:id", 
    component: ActivityFormComponent 
  },
  {
    path: "slider",
    component: SlidesFormComponent
  },
  {
    path: "slider/:id",
    component: SlidesFormComponent
  },
  {

    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  { 
    path: "testimonios", 
    component: TestimonialFormComponent 
  },
  { 
    path: "testimonio/:id", 
    component: TestimonialFormComponent 
  },
  {
    path: "news",
    component: NewsFormComponent
  },
  { 
    path: "news/:id",
    component: NewsFormComponent
  },
  { 
    path: "members",
    component: MembersFormComponent
  },

  { 
    path: "members/:id",
    component: MembersFormComponent
  },

  {
    path: "organization",
    component: OrgViewComponent,
  },
  {
    path: "organization/:id",
    component: OrgViewComponent,
  },
  {
    path: "backoffice/organization/edit/:id",
    component: EditFormComponent
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () =>
      import('./pages/auth/login-form/login-form-routing.module').then(
        (m) => m.LoginFormRoutingModule
      )
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./pages/auth/register-form/register-form-routing.module').then(
        (m) => m.RegisterFormRoutingModule
      )
  },
  {
    path: 'contact-form',
    component: ContactFormComponent
  },
  {
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
