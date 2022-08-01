import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TituloComponent } from "./components/titulo/titulo.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { NavbarComponent } from "./components/backoffice/navbar/navbar.component";
import { NoimagePipe } from "./pipes/noimage.pipe";
import { CardComponent } from "./components/card/card.component";
import { RouterModule } from "@angular/router";
import { DialogComponent } from './components/layout/dialog/dialog.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { LoudingComponent } from './components/layout/louding/louding.component';

@NgModule({
  declarations: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
    DialogComponent,
    LoudingComponent,
  ],
  exports: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
    DialogComponent,
    LoudingComponent,
  ],
  imports: [CommonModule,
     RouterModule,
     MatProgressSpinnerModule

    ],
})
export class SharedModule {}
