import { Component, OnInit } from "@angular/core";



@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  menus = [
    {
      name: "Novedades",
      img: "assets/images/novedades.PNG",
      link: "/backoffice/news",
    },
    {
      name: "Actividades",
      img: "assets/images/actividades.PNG",
      link: "/backoffice/activities",
    },
    {
      name: "Categorias",
      img: "assets/images/categorias.PNG",
      link: "/backoffice/categories",
    },
    {
      name: "Testimonios",
      img: "assets/images/testimonio.PNG",
      link: "/backoffice/testimonios",
    },
    {
      name: "Organizacion",
      img: "assets/images/organizacion.PNG",
      link: "/backoffice/organization",
    },
    {
      name: "Slides",
      img: "assets/images/slides.PNG",
      link: "/backoffice/slider",
    },
    {
      name: "Usuarios",
      img: "assets/images/usuarios.PNG",
      link: "/backoffice/users",
    },
    {
      name: "Miembros",
      img: "assets/images/miembros.PNG",
      link: "/members",
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
