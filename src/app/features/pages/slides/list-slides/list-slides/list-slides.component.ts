import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Slides } from "src/app/core/models/slides.model";
import { SlideFormService } from "src/app/core/services/slide-form.service";
import { loadedSliders, loadSliders } from "src/app/state/actions/slider.actions";
import { AppState } from "src/app/state/app.state";
import { selectSlideList, selectSlideLoading } from "src/app/state/selectors/slider.selectors";
import Swal from "sweetalert2";

@Component({
  selector: "app-list-slides",
  templateUrl: "./list-slides.component.html",
  styleUrls: ["./list-slides.component.scss"],
})
export class ListSlidesComponent implements OnInit {
  listSlides$: Observable<any> = new Observable;
  loading$: Observable<boolean> = new Observable();

  constructor(
    private slideService: SlideFormService,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectSlideLoading);
    this.store.dispatch(loadSliders());
    this.listSlides$ = this.store.select(selectSlideList);

  }

  deleteSlide(id: string) {
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
        this.slideService.deleteSlide(id).subscribe((resp) => {
          Swal.fire("Borrado!", `Registro ${id} ha sido borrado`, "success");
          this.ngOnInit();
        });
      }
    });
  }
}
