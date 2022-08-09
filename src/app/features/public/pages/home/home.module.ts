import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./page/home.component";
import { HeroComponent } from "./components/hero/hero.component";
import { NewsComponent } from "./components/news/news.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [HomeComponent, HeroComponent, NewsComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class HomeModule {}
