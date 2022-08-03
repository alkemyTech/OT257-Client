import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/core/models/IOrganization';
import { NewModel } from 'src/app/core/models/new.model';
import { Slides } from 'src/app/core/models/slides.model';
import { HomeService } from 'src/app/core/services/home/home.service';
import { LoaderService } from 'src/app/core/services/loader/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public organizationData!: Data;
  news!: NewModel[]
  slides: Slides[] = []

  loading$ = this.loaderService.loading$;

  constructor(private homeSvc: HomeService, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.getDatesPublics();
    this.getNews();
    this.getSlider();
  }

  //Dates publics 
  public getDatesPublics() {
    this.homeSvc.getDatesPublics().subscribe({
      next: (res: any) => {
        this.organizationData = res.data;
      }})
  }

  //News
  public getNews() {
    this.homeSvc.getNews().subscribe({
      next: (res: any) => {
        this.news = res.data.slice(0, 6);
      }})
     
  }

  //Slider
  public getSlider() {
    this.homeSvc.getSlider().subscribe({
      next: (res: any) => {
        //ordenar por res.data.order
        this.slides = res.data.sort((a:any, b:any) => a.order - b.order).slice(0, 3);
      }})
  }

}
