import { Component, OnInit } from '@angular/core';
import { NewModel } from 'src/app/core/models/new.model';
import { NewsService } from 'src/app/core/services/news/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  newsData: NewModel = {
    id: '',
    name: '',
    slug: '',
    content: '',
    user_id: '',
    category_id: '',
    image: '',
    created_at: new Date()
  };
  id!: string | null;
  constructor(private newsSvc: NewsService, private route: ActivatedRoute, ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.newsSvc
      .getNew(this.id)
      .pipe()
      .subscribe((res) => {
        this.newsData = res.data;
      });
  }

  onBack(): void {
    window.history.back();
  }
}
