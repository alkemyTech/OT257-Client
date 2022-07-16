import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";

const routes: Routes = [
  {
    path: "slider",
    component: SlidesFormComponent
  },
  {
    path: "slider/:id",
    component: SlidesFormComponent
  },
  { 
    path: "actividades", 
    component: ActivityFormComponent },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  {
    path: "backoffice/organization",
    component: OrgViewComponent,
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
  },
  
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
