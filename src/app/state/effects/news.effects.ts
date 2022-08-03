import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { NewsService } from '../../core/services/news/news.service';
import  * as actions from '../actions/news.actions';

@Injectable()
export class NewsEffects {


  constructor(
    private actions$: Actions,
    private newsService: NewsService
  ) {  }


  loadNews$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadNews),
    mergeMap(() => this.newsService.getNews()
      .pipe(
        map(news => actions.loadedNews(news)),
        catchError(() => of({ type: '[News API] News Loaded Error' }))
      ))
    )
  );


  updateNews$ = createEffect(() => this.actions$.pipe(
    ofType(actions.updateNews),
    mergeMap((news) =>this.newsService.updateNew(news.id, news.data)
      .pipe(
        map(news => actions.updatedNews(news),
        catchError(() => of({ type: '[News API] News Loaded Error' }))
      ))
    )
  )
  );



}