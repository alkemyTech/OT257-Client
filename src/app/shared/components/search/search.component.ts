import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { toastError } from '../layouts/alerts/alerts';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchKeyup = new Subject<any>();
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.searchKeyup.pipe(debounceTime(500)).subscribe((search: string) => {
      this.getNewSearch(search)
    }), (err: any) => {
      toastError.fire({
        title: 'Error en la busqueda',
      })
    }
  }


  OnSearch(search: any) {
    this.searchKeyup.next(search.target.value)
  }

  getNewSearch(search: string) {
    this.search.emit(search)
  }

}
