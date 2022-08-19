import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivitiesViewComponent } from "./pages/activities-view/activities-view.component";
import { AboutComponent } from "./pages/about/page/about.component";
import { HomeComponent } from "./pages/home/page/home.component";
import { ContactFormComponent } from "./pages/contact-form/contact-form.component";
import { ToysComponent } from "./pages/landings/toys/toys.component";
<<<<<<< HEAD
import { FooterComponent } from "./pages/school-campaign/footer/footer.component";
import { LoginGuard } from "src/app/shared/guards/login.guard";
=======
>>>>>>> 150dc0f621b6aa7f1f701b0d9bf19ff5028fd7ce
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
    path: "campaña-juguetes",
    component: ToysComponent,
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
