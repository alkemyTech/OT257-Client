import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TituloComponent } from "./components/titulo/titulo.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { NavbarComponent } from "./components/backoffice/navbar/navbar.component";
import { NoimagePipe } from "./pipes/noimage.pipe";
import { CardComponent } from "./components/card/card.component";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule } from "@angular/router";
import { LazyLoadComponent } from './components/layout/lazy-load/lazy-load.component';
import { SkeletonComponent } from "./components/layout/skeleton/skeleton/skeleton.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { ProgressBarComponent } from "./components/layouts/progress-bar/progress-bar.component";

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
    LoaderComponent,
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
    ProgressBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule,
    LoaderComponent,
    MatProgressBarModule
  ],
})
export class SharedModule { }
