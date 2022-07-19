import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { NewsComponent } from './components/news/news.component';



@NgModule({
  declarations: [HomeComponent, HeroComponent, NewsComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
