import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent} from './titulo/titulo.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './backoffice/navbar/navbar.component';
import { NoimagePipe } from './pipes/noimage.pipe'




@NgModule({
  declarations: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    NoimagePipe,
  ],
  exports: [
            TituloComponent,
            CarouselComponent,
            NavbarComponent,
            NoimagePipe 
          ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
