import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Slides } from '../../../core/models/slides.model';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChild('carousel') _carousel!: ElementRef;

  @Input() slides: Slides[] = [];



  constructor() { }

  ngOnInit(): void {
  }

}
