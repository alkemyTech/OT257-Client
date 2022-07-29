import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { NewsService } from '../../core/services/news/news.service';
import { loadedNews } from '../actions/news.actions';

@Injectable()
export class NewsEffects {



  constructor(
    private actions$: Actions,
    private newsService: NewsService
  ) {  }


  loadNews$ = createEffect(() => this.actions$.pipe(
    ofType('[New List] Load News'),
    mergeMap(() => this.newsService.getNews()
      .pipe(
        map(news => ({ type: '[News API] News Loaded Success', news: news })),
        catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
      ))
    )
  );



}