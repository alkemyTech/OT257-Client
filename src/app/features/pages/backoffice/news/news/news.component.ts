import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../../../../core/services/news/news.service";

import Swal from "sweetalert2";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
  news!: any;

  constructor(private newService: NewsService) {}

  ngOnInit(): void {

    this.newService.getNews()
        .then((resp: any)=>{
          this.news = resp.data;
          console.log(this.news);
        })

  }

  deleteNew(id: string) {
    Swal.fire({
      title: "Esta seguro de borrar?",
      text: "Esta accion no tiene revercion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrarlo!",
    }).then((result) => {
      if (result.isConfirmed) {

        
        this.newService.deleteNew(id).then((resp) => {
          Swal.fire("Borrado!", `Registro ${id} ha sido borrado`, "success");
          this.ngOnInit();
        });

        
      }
    });
  }
}
