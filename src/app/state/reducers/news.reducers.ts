import { createReducer, on } from '@ngrx/store';
import { NewModel, NewsState } from '../../core/models/new.model';
import { loadedNews } from '../actions/news.actions';


export const initialState:  { 
  success: boolean,
   data:ReadonlyArray<NewModel>;
  }={ 
    success:false,
    data:[]
  }

export const newsReducer= createReducer(
  initialState,
  on(loadedNews, (state,action) => {
  //console.log("action",action);
        return{
          ...state,
          data:action.data
        }
  }),
 
);