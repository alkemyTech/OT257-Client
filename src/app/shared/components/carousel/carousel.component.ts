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

  slidesStatic = [
    {
      name: 'De vuelta al cole!',
      description: 'La falta de escuelas en las  comunidades y la alta rotación de docentes calificados  hace que las chicas y chicos tengan que trasladarse a otras localidades y recorrer muchos kilómetros por día.',
      image: 'assets/images/campania-escolar1.jpg'
    },
    {
      name: 'Campaña colecta de juguetes',
      description: 'El mes de agosto es el mes de las infancias, y desde la organización estamos recolectando juguetes para niños y niñas.',
      image: 'assets/images/colecta-juguetes.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
