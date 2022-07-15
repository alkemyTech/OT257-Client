import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NewFormComponent } from "./pages/news/new-form/new-form.component";


const routes: Routes = [
  { 
    path: "actividades", 
    component: ActivityFormComponent },
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
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
