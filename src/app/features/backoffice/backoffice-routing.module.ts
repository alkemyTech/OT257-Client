import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { ListActiviyComponent } from "./pages/activities/list-activiy/list-activiy.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { ListSlidesComponent } from "./pages/slides/list-slides/list-slides/list-slides.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { NewsComponent } from "./pages/news/news/news.component";
import { MembersComponent } from "./pages/members/members/members.component";
import { MembersFormComponent } from "./pages/members/members-form/members-form.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { OrgViewComponent } from "./pages/organization/org-view/org-view.component";
import { EditFormComponent } from "./pages/organization/edit-form/edit-form.component";
import { BackOfficeHomeComponent } from "./pages/home/back-office-home.component";
import { UsersListComponent } from "./pages/users-list/users-list.component";

export const routes: Routes = [
  {
    path: "/actividades",
    component: ActivityFormComponent,
  },
  {
    path: "/actividades/:id",
    component: ActivityFormComponent,
  },
  {
    path: "/activities",
    component: ListActiviyComponent,
  },

  {
    path: "/activities/create",
    component: ActivityFormComponent,
  },
  {
    path: "/slider/create",
    component: SlidesFormComponent,
  },
  {
    path: "/slider/update/:id",
    component: SlidesFormComponent,
  },
  {
    path: "/slider",
    component: ListSlidesComponent,
  },
  {
    path: "/testimonios",
    component: TestimonialFormComponent,
  },
  {
    path: "/testimonio/:id",
    component: TestimonialFormComponent,
  },
  {
    path: "/news-form",
    component: NewsFormComponent,
  },
  {
    path: "/news",
    component: NewsComponent,
  },
  {
    path: "/news/create",
    component: NewsFormComponent,
  },
  {
    path: "/news/:id",
    component: NewsFormComponent,
  },
  {
    path: "/members",
    component: MembersComponent,
  },
  {
    path: "/members/create",
    component: MembersFormComponent,
  },

  {
    path: "/new/:id",
    component: NewsFormComponent,
  },
  {
    path: "/members/:id",
    component: MembersFormComponent,
  },
  {
    path: "",
    component: DashboardComponent,
  },

  {
    path: "/organization",
    component: OrgViewComponent,
  },
  {
    path: "/organization/edit/:id",
    component: EditFormComponent,
  },
  {
    path: "/Home",
    component: BackOfficeHomeComponent,
  },
  {
    path: "/users",
    component: UsersListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
