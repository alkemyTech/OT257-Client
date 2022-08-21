import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor() { }

  menuList = [
    {
      name: "Inicio",
      link: "",
      userLog: false,
    },
    {
      name: "Nosotros",
      link: "/nosotros",
      userLog: false,
    },
    {
      name: "Novedades",
      link: "/novedades",
      userLog: false,
    },
    {
      name: "Testimonios",
      link: "#",
      userLog: false,
    },
    {
      name: "Contacto",
      link: "/contacto",
      userLog: false,
    },
    {
      name: "Contribuye",
      link: "#",
      userLog: false,
    },
  ];

  dropdown = [
    {
      name: "Campañas",
      campaign: [
        { name: "Juguetes", link: "/campaña-juguetes", userLog: false },
        { name: "Utiles escolares", link: "#", userLog: false },
      ],
    },
  ];

  authentication = [
    {
      name: "Login",
      link: "/iniciar-sesion",
      userLog: false
    },
    {
      name: "Registrarse",
      link: "/registro",
      userLog: false
    }
  ]

  ngOnInit(): void { }
}
