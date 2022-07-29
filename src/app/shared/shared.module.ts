import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TituloComponent } from "./components/titulo/titulo.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { NavbarComponent } from "./components/backoffice/navbar/navbar.component";
import { NoimagePipe } from "./pipes/noimage.pipe";
import { CardComponent } from "./components/card/card.component";
import { RouterModule } from "@angular/router";
import { SkeletonComponent } from './components/layout/skeleton/skeleton/skeleton.component';

@NgModule({
  declarations: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
    SkeletonComponent,
  ],
  exports: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
    SkeletonComponent
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
