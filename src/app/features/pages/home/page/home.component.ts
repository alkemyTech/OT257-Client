import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/core/models/IOrganization';
import { OrgViewService } from 'src/app/core/services/org-view.service';
import { NewModel } from 'src/app/models/new.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public organizationData!: Data;
  news!: NewModel[]

  constructor(private orgSvc: OrgViewService, private newsSvc: NewsService ) { }

  ngOnInit(): void {
    this.getDatesPublics();
    this.getNews();
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
    this.newsSvc.getNews().subscribe({
      next: (res: any) => {
        this.news = res.data.slice(0, 6);
      }})
  }

}
