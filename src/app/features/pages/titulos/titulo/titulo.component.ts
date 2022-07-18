import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {
  @Input ('title') showTitle: string = "";
  @Input ('image') showImage: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
