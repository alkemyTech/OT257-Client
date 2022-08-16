import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  menuList = [
    {
      name: "Inicio",
      link: "",
      usuarioLog: false,
    },
    {
      name: "Nosotros",
      link: "/nosotros",
      usuarioLog: false,
    },
    {
      name: "Contacto",
      link: "/contacto",
      usuarioLog: false,
    },
    {
      name: "Donaciones de utiles escolares",
      link: "#",
      usuarioLog: false,
    },
    {
      name: "Donaciones de juguetes",
      link: "#",
      usuarioLog: false,
    },
  ];
  ngOnInit(): void {}
}
