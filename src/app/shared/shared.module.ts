import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TituloComponent } from "./components/titulo/titulo.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { NavbarComponent } from "./components/backoffice/navbar/navbar.component";
import { NoimagePipe } from "./pipes/noimage.pipe";
import { CardComponent } from "./components/card/card.component";
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule } from "@angular/router";
import { LoudingComponent } from './components/layout/louding/louding.component';
import { SkeletonComponent } from "./components/layout/skeleton/skeleton/skeleton.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import {  MatProgressBarModule } from '@angular/material/progress-bar';
import { LazyLoadComponent } from './components/layout/lazy-load/lazy-load.component';



@NgModule({
  declarations: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
    LazyLoadComponent,
    SkeletonComponent,
    LoaderComponent,
    LoudingComponent
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
    LoudingComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],

})

export class SharedModule {}
