import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivitiesViewComponent } from "./pages/activities-view/activities-view.component";
import { AboutComponent } from "./pages/about/page/about.component";
import { HomeComponent } from "./pages/home/page/home.component";
import { ContactFormComponent } from "./pages/contact-form/contact-form.component";
import { NewsComponent } from "./pages/news/news.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "actividades",
    component: ActivitiesViewComponent,
  },
  {
    path: "nosotros",
    component: AboutComponent,
  },
  {
    path: "novedades",
    component: NewsComponent
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
    path: "contacto",
    component: ContactFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
