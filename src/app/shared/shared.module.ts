import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TituloComponent } from "./components/titulo/titulo.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { NavbarComponent } from "./components/backoffice/navbar/navbar.component";
import { NoimagePipe } from "./pipes/noimage.pipe";
import { CardComponent } from "./components/card/card.component";
import { ProgressBarComponent } from './components/layout/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule } from "@angular/router";
<<<<<<< HEAD
import { LoudingComponent } from './components/layout/louding/louding.component';
import { SkeletonComponent } from "./components/layout/skeleton/skeleton/skeleton.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { ProgressBarComponent } from "./components/layout/progress-bar/progress-bar.component";
import {  MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';





=======
import { LazyLoadComponent } from './components/layout/lazy-load/lazy-load.component';
import { SkeletonComponent } from "./components/layout/skeleton/skeleton/skeleton.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
>>>>>>> 68796eec23c210ffb7efb8069256f6e94e08c317

@NgModule({
  declarations: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
<<<<<<< HEAD
    LoudingComponent,
    SkeletonComponent,
    ProgressBarComponent,
    LoudingComponent

=======
    LazyLoadComponent,
    SkeletonComponent,
    ProgressBarComponent,
    LoaderComponent,
>>>>>>> 68796eec23c210ffb7efb8069256f6e94e08c317
  ],
  exports: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    NoimagePipe,
    CardComponent,
<<<<<<< HEAD
    LoudingComponent,
    SkeletonComponent,
    NgxSkeletonLoaderModule,
    ProgressBarComponent,
    LoudingComponent
=======
    LazyLoadComponent,
    SkeletonComponent,
    NgxSkeletonLoaderModule,
    ProgressBarComponent

>>>>>>> 68796eec23c210ffb7efb8069256f6e94e08c317
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule,
<<<<<<< HEAD
=======
    ProgressBarComponent,
    LoaderComponent
>>>>>>> 68796eec23c210ffb7efb8069256f6e94e08c317
    MatProgressBarModule,
    MatProgressSpinnerModule

   
  ],
<<<<<<< HEAD

})

export class SharedModule {}
=======
  imports: [CommonModule, RouterModule, MatProgressBarModule, MatProgressSpinnerModule],
})
export class SharedModule { }
>>>>>>> 68796eec23c210ffb7efb8069256f6e94e08c317
