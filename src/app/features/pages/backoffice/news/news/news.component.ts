import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../../../../core/services/news/news.service";

import Swal from "sweetalert2";
import { Store } from '@ngrx/store';
import { loadedNews } from '../../../../../state/actions/news.actions';
import { NewModel } from "src/app/core/models/new.model";
import { Observable } from 'rxjs';
import { selectListNew } from '../../../../../state/selectors/news.selectors';

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
  news!: any;
  spinner!:boolean;

  news_$:Observable<any> = new Observable();

  constructor(
    private newService: NewsService,
    private store:Store<any>
    ) {}

  ngOnInit(): void {

    this.news_$=this.store.select(selectListNew);


  console.log('____',this.news_$);
    this.spinner=true;
    this.newService.getNews()
        .subscribe((resp: any)=>{
          this.news = resp.data;
          setInterval(()=>this.spinner=false , 1000);
          
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

        
        this.newService.deleteNew(id).subscribe((resp) => {
          resp.success?Swal.fire("Borrado!", `Registro ${id} ha sido borrado`, "success"):Swal.fire("Error", "Error de conexion", "error");
          
          this.ngOnInit();
        });

        
      }
    });
  }
}
