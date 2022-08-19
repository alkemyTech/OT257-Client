import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import { selectSlideList } from "src/app/state/selectors/slider.selectors";
import Swal from "sweetalert2";
import { deleteSlider } from "src/app/state/actions/slider.actions";
import { Slides } from '../../../../../../core/models/slides.model';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  @Output() dataSearch = new EventEmitter<Slides[]>();
  private subjectKeyUp = new Subject<any>();
  listSlides$: Observable<any> = new Observable();
  slideFilter: any = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.listSlides$ = this.store.select(selectSlideList);
  }

  buscarSlide($event: any) {
    $event.preventDefault();
    this.subjectKeyUp.next($event.target.value);
    this.subjectKeyUp.pipe(debounceTime(500)).subscribe((inputValue) => {
      this.slideFilter = [];
        this.slideFilter = [];
        this.listSlides$.subscribe((data) => {
          for (let dataName of data) {
            let nameSlide = dataName.name.substring(0, inputValue.length);
            if (nameSlide.toLowerCase() == inputValue.toLowerCase()) {
              this.slideFilter.push(dataName);
            }
          }
          if (this.slideFilter.length === 0) {
            this.slideFilter = data;
          }
        });
        this.dataSearch.emit(this.slideFilter);
      
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
}
