import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TituloComponent } from "./components/titulo/titulo.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { NavbarComponent } from "./components/backoffice/navbar/navbar.component";
import { NoimagePipe } from "./pipes/noimage.pipe";
import { CardComponent } from "./components/card/card.component";
import { RouterModule } from "@angular/router";
import { ProgressBarComponent } from './components/layout/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
@NgModule({
  declarations: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
    ProgressBarComponent,
    LoaderComponent,
  ],
  exports: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
    ProgressBarComponent,
    LoaderComponent
  ],
  imports: [CommonModule, RouterModule, MatProgressBarModule, MatProgressSpinnerModule],
})
export class SharedModule { }
