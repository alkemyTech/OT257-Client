import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../../../../core/services/news/news.service";
import Swal from "sweetalert2";
import { Store } from "@ngrx/store";
import {
  loadedNews,
  loadNews,
} from "../../../../../state/actions/news.actions";
import { NewModel } from "src/app/core/models/new.model";
import { Observable } from "rxjs";
import {
  selectListNew,
  selectLoading,
} from "../../../../../state/selectors/news.selectors";
import { catchError, map } from "rxjs/operators";
import { alertConfirm } from "src/app/shared/components/layouts/alerts/alerts";


@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
  spinner!: boolean;
  showDialog: boolean = false;

  news_$: Observable<any> = new Observable();
  loading_$: Observable<any> = new Observable();

  constructor(private newService: NewsService, private store: Store<any>) {}

  ngOnInit(): void {
    this.spinner = true;

    this.newService.getNews().pipe(
      catchError((err: Error) => {
        this.showDialog = true;
        return err.name;
      })
    );
    this.store.dispatch(loadNews());
    this.news_$ = this.store.select(selectListNew);
    this.loading_$ = this.store.select(selectLoading);

    setInterval(() => (this.spinner = false), 1000);
  }

  deleteNew(id: string) {
    alertConfirm
      .fire({
        title: "Esta seguro de borrar?",
        text: "Esta accion no tiene revercion!",
        icon: "warning",
  
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.newService.deleteNew(id).subscribe((resp) => {
            alertConfirm.fire({
              title: "Borrado!",
              text: `Registro ${id} ha sido borrado`,
              icon: "success",
              showCancelButton: true,
            });
            this.ngOnInit();
          });
        }
      });
  }
}
