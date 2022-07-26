import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/core/models/IOrganization';
import { OrgViewService } from 'src/app/core/services/org-view.service';
import { NewModel } from 'src/app/core/models/new.model';
import { NewsService } from 'src/app/core/services/news/news.service';
import { SlidesService } from 'src/app/core/services/slider/slides.service';
import { Slides } from 'src/app/core/models/slides.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public organizationData!: Data;
  news!: NewModel[]
  slides: Slides[] = []

  constructor(private orgSvc: OrgViewService, private newsSvc: NewsService, private slideSvc: SlidesService) { }

  ngOnInit(): void {
    this.getDatesPublics();
    this.getNews();
    this.getSlider();
  }

  //Dates publics 
  public getDatesPublics() {
    this.orgSvc.getorganizationData().subscribe({
      next: (res: any) => {
        this.organizationData = res.data;
      }})
  }

  //News
  public getNews() {
    /*
    this.newsSvc.getNews().subscribe({
      next: (res: any) => {
        this.news = res.data.slice(0, 6);
      }})
      */
  }

  //Slider
  public getSlider() {
    this.slideSvc.getSlider().subscribe({
      next: (res: any) => {
        //ordenar por res.data.order
        this.slides = res.data.sort((a:any, b:any) => a.order - b.order).slice(0, 3);
      }})
  }

}
