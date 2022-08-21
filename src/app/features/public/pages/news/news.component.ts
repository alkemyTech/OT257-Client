import { Component, OnInit } from '@angular/core';
import { NewModel } from 'src/app/core/models/new.model';
import { NewsService } from 'src/app/core/services/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsData!: NewModel[];
  title = "Novedades";
  constructor(private newsSvc: NewsService) {}

  ngOnInit(): void {
    this.newsSvc
      .getNews()
      .pipe()
      .subscribe((res) => {
        this.newsData = res.data.slice(0, 12);
      });
  }

  onSearch(search: string) {
    this.newsSvc
      .gerNewsSearch(search)
      .pipe()
      .subscribe((res) => {
        this.newsData = res.data.slice(0, 12);
      }
      );
  }
}
