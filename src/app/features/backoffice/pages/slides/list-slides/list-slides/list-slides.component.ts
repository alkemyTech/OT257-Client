import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  deleteSlider,
  loadSliders,
} from "src/app/state/actions/slider.actions";
import { AppState } from "src/app/state/app.state";
import {
  selectOneSlideLoading,
  selectSlideList,
  selectSlideLoading,
} from "src/app/state/selectors/slider.selectors";
import Swal from "sweetalert2";
import { Slides } from '../../../../../../core/models/slides.model';

@Component({
  selector: "app-list-slides",
  templateUrl: "./list-slides.component.html",
  styleUrls: ["./list-slides.component.scss"],
})
export class ListSlidesComponent implements OnInit {
  listSlides: Slides[] = [];
  loading$: Observable<boolean> = new Observable();
  loadingUpdateSlide$: Observable<boolean> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectSlideLoading);
    this.loadingUpdateSlide$ = this.store.select(selectOneSlideLoading);
    this.store.dispatch(loadSliders());
     this.store.select(selectSlideList).subscribe(data=>{
      this.listSlides = data;
      });
  }

  deleteSlide(id: number) {
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
        this.store.dispatch(deleteSlider({ id }));
        console.log(id);
      }
    });
  }

  onDataSearch(slideData: Slides[]){
    this.listSlides = slideData;
  }
}
