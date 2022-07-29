import { createReducer, on } from '@ngrx/store';
import { NewsState } from '../../core/models/new.model';
import { loadedNews } from '../actions/news.actions';


export const initialState: NewsState = {
          news:[]
}

export const newsReducer= createReducer(
  initialState,
  on(loadedNews, (state,action) => {
  console.log("action",action);
        return{
          ...state,
          news:action.news
        }
  }),
 
);