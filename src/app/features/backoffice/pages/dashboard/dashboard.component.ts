import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/services/auth/auth.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  menus = [
    {
      name: "Novedades",
      i: "fas fa-newspaper",
      link: "/backoffice/news",
    },
    {
      name: "Actividades",
      i: "fal fa-chart-network",
      link: "/backoffice/activities",
    },
    {
      name: "Categorias",
      i: "fas fa-list",
      link: "/backoffice/categories",
    },
    {
      name: "Testimonios",
      i: "fal fa-keynote",
      link: "/backoffice/testimonios",
    },
    {
      name: "Organizacion",
      i: "fas fa-sitemap",
      link: "/backoffice/organization",
    },
    {
      name: "Slides",
      i: "fas fa-presentation",
      link: "/backoffice/slider",
    },
    {
      name: "Usuarios",
      i: "fas fa-users",
      link: "/backoffice/users",
    },
    {
      name: "Miembros",
      i: "fad fa-users",
      link: "/backoffice/members",
    },
  ];

  constructor(private authSvc: AuthService) {}

  ngOnInit(): void {
    this.authSvc.checkToken();
  }
}
