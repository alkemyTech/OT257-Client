import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { OrgViewComponent } from "./pages/organization/org-view/org-view.component";
import { NewFormComponent } from "./pages/news/new-form/new-form.component";
import { EditFormComponent } from "./pages/organization/edit-form/edit-form.component";
import { TestimonialFormComponent } from './pages/testimonials/testimonial-form/testimonial-form.component';

const routes: Routes = [
  {
    path: "actividades",
    component: ActivityFormComponent
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
    path: "new/:id",
    component: NewFormComponent
  },

  {
    path: "backoffice/organization",
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
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
