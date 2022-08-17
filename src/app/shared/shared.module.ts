import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TituloComponent } from "./components/titulo/titulo.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { NavbarComponent } from "./components/backoffice/navbar/navbar.component";
import { NoimagePipe } from "./pipes/noimage/noimage.pipe";
import { CardComponent } from "./components/card/card.component";
import { ProgressBarComponent } from './components/layouts/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule } from "@angular/router";
import { LazyLoadComponent } from './components/layouts/lazy-load/lazy-load.component';
import { SkeletonComponent } from "./components/layouts/skeleton/skeleton/skeleton.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidebarComponent } from './components/backoffice/sidebar/sidebar.component';
import { HeaderComponent } from "./components/header/header.component";
import { LayoutComponentComponent } from './components/layout-component/layout-component.component';



@NgModule({
  declarations: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    SidebarComponent,
    NoimagePipe,
    CardComponent,
    LazyLoadComponent,
    SkeletonComponent,
    ProgressBarComponent,
    LoaderComponent,
    FooterComponent,
    NotFoundComponent,
    SidebarComponent,
    HeaderComponent,
    LayoutComponentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    TituloComponent,
    CarouselComponent,
    NavbarComponent,
    SidebarComponent,
    NoimagePipe,
    CardComponent,
    LazyLoadComponent,
    SkeletonComponent,
    ProgressBarComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }