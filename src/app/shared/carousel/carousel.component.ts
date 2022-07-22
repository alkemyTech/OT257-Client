import { Component, OnInit, Input, AfterContentInit, ElementRef, ViewChild } from '@angular/core';
import { Slides } from '../../core/models/slides.model';

declare var $: any; // used to access jQuery

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterContentInit {
  @ViewChild('carousel') _carousel!: ElementRef;

 @Input() slides: Slides[] = [];

  constructor() { }
  ngAfterContentInit(): void {
    const carouselElem = this._carousel?.nativeElement;
    const carousel = $(carouselElem).carousel();

    }

  ngOnInit(): void {
  }

}
