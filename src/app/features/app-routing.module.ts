import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../shared/components/not-found/not-found.component";
import { BackofficeGuard } from "../shared/guards/backoffice.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./public/public.module").then((m) => m.PublicModule),
  },
  {
    path: "backoffice",
    canActivate: [BackofficeGuard],
    loadChildren: () =>
      import("./backoffice/backoffice.module").then((m) => m.BackofficeModule),
  },
  { path: "**", component: NotFoundComponent, pathMatch: "full" },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
