import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent} from './titulo/titulo.component';
import { CarouselComponent } from './carousel/carousel.component'




@NgModule({
  declarations: [
    TituloComponent,
    CarouselComponent,
  ],
  exports: [TituloComponent, CarouselComponent],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
