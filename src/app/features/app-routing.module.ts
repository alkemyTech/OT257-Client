import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { OrgViewComponent } from "./pages/organization/org-view/org-view.component";
import { NewFormComponent } from "./pages/news/new-form/new-form.component";
import { MembersFormComponent } from "./pages/backoffice/members/members-form/members-form.component";
import { MemberFormComponent } from "./pages/backoffice/members/member-form/member-form.component";

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
    path: "news", 
    component: NewsFormComponent 
  },
  { 
    path: "new/:id",
    component: NewFormComponent
  },
  { 
    path: "members",
    component: MembersFormComponent
  },

  { 
    path: "member/:id",
    component: MemberFormComponent
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
