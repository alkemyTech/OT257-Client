import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyLoadComponent implements OnInit {
@Input('image') showImage : String ="";
@Input('descriptionImage') showAlt : String ="";

  constructor() { }

  ngOnInit(): void {
  }

}
