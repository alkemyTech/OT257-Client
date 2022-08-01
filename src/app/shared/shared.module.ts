import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TituloComponent } from "./components/titulo/titulo.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { NavbarComponent } from "./components/backoffice/navbar/navbar.component";
import { NoimagePipe } from "./pipes/noimage.pipe";
import { CardComponent } from "./components/card/card.component";
import { RouterModule } from "@angular/router";
import { LazyLoadComponent } from './components/layout/lazy-load/lazy-load.component';
import { SkeletonComponent } from "./components/layout/skeleton/skeleton/skeleton.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { ProgressBarComponent } from "./components/layout/progress-bar/progress-bar.component";

@NgModule({
  declarations: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
    LazyLoadComponent,
    SkeletonComponent,
    ProgressBarComponent,
  ],
  exports: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
    LazyLoadComponent,
    SkeletonComponent,
    NgxSkeletonLoaderModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule,
    ProgressBarComponent,
    MatProgressBarModule,
  ],
})
export class SharedModule {}
