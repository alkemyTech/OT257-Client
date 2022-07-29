import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TituloComponent } from "./components/titulo/titulo.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { NavbarComponent } from "./components/backoffice/navbar/navbar.component";
import { NoimagePipe } from "./pipes/noimage.pipe";
import { CardComponent } from "./components/card/card.component";
import { RouterModule } from "@angular/router";
import { ProgressBarComponent } from './components/layout/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
    ProgressBarComponent,
  ],
  exports: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
