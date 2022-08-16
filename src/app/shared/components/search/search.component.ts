import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounce } from 'rxjs/operators';

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
    this.searchKeyup.pipe(debounce(i=>i.length>2?i:'')).subscribe((search: string) => {
      this.getNewSearch(search)
    }), (err: any) => {
      console.log(err)
    }
  }


  OnSearch(search: any) {
    this.searchKeyup.next(search.target.value)
  }

  getNewSearch(search: string) {
    this.search.emit(search)
  }

}
