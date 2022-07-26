import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { MembersFormComponent } from "./pages/backoffice/members/members-form/members-form.component";
import { NewsFormComponent } from "./pages/backoffice/news/news-form/news-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { OrgViewComponent } from "./pages/organization/org-view/org-view.component";
import { EditFormComponent } from "./pages/organization/edit-form/edit-form.component";
import { HomeComponent } from "./pages/home/page/home.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { BackOfficeHomeComponent } from "./pages/back-office-home/back-office-home.component";
import { AboutComponent } from "./pages/about/about.component";
import { DashboardComponent } from "./pages/backoffice/dashboard/dashboard.component";
import { ContactFormComponent } from "./pages/contact/contact-form/contact-form.component";
import { ListActiviyComponent } from "./pages/activities/list-activiy/list-activiy.component";
import { UsersListComponent } from "./pages/backoffice/users-list/users-list.component";
import { NewsComponent } from "./pages/backoffice/news/news/news.component";
import { MembersComponent } from "./pages/backoffice/members/members/members.component";
import { ListSlidesComponent } from "./pages/slides/list-slides/list-slides/list-slides.component";

const routes: Routes = [
  {
    path: "actividades",
    component: ActivityFormComponent,
  },
  {
    path: "backoffice/activities",
    component: ListActiviyComponent,
  },
  {
    path: "nosotros",
    component: AboutComponent,
  },
  {
    path: "backoffice/activities/create",
    component: ActivityFormComponent,
  },
  {
    path: "activities/:id",
    component: ActivityFormComponent,
  },
  {
    path: "slider",
    component: SlidesFormComponent,
  },
  {
    path: "slider/:id",
    component: SlidesFormComponent
  },
  {
    path: "backoffice/Slides",
    component: ListSlidesComponent
  },
  {

    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
    component: SlidesFormComponent,
  },
  {
    path: "testimonios",
    component: TestimonialFormComponent,
  },
  {
    path: "testimonio/:id",
    component: TestimonialFormComponent,
  },
  {
    path: "news-form",
    component: NewsFormComponent,
  },
  {
    path: "backoffice/news",
    component: NewsComponent,
  },
  {
    path: "backoffice/news/create",
    component: NewsFormComponent,
  },
  {
    path: "backoffice/news/:id",
    component: NewsFormComponent,
  },
  {
    path: "backoffice/members",
    component: MembersComponent,
  },
  {
    path: "backoffice/members/create",
    component: MembersFormComponent,
  },

  {
    path: "new/:id",
    component: NewsFormComponent,
  },
  {
    path: "backoffice/members/:id",
    component: MembersFormComponent,
  },
  {
    path: "backoffice",
    component: DashboardComponent,
  },

  {
    path: "backoffice/organization",
    component: OrgViewComponent,
  },
  {
    path: "backoffice/organization/edit/:id",
    component: EditFormComponent,
  },
  {
    path: "backoffice/organization/edit/:id",
    component: EditFormComponent,
  },
  {
    path: "backoffice/Home",
    component: BackOfficeHomeComponent,
  },
  {
    path: "backoffice/users",
    component: UsersListComponent,
  },
  {
    path: "iniciar-sesion",
    loadChildren: () =>
      import("./pages/auth/login-form/login-form-routing.module").then(
        (m) => m.LoginFormRoutingModule
      ),
  },
  {
    path: "registro",
    loadChildren: () =>
      import("./pages/auth/register-form/register-form-routing.module").then(
        (m) => m.RegisterFormRoutingModule
      ),
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "contact-form",
    component: ContactFormComponent,
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
