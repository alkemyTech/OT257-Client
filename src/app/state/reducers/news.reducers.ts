import { createReducer, on } from '@ngrx/store';
import { NewModel, NewsState } from '../../core/models/new.model';
import * as actions from '../actions/news.actions';


export const initialState:  { 
  success: boolean,
   data:ReadonlyArray<NewModel>;
  }={ 
    success:false,
    data:[]
  }

export const newsReducer= createReducer(
  initialState,
  on(actions.loadedNews, (state,action) => {
  //console.log("action",action);
        return{
          ...state,
          data:action.data
        }
  }),
  on(actions.updatedNews, (state,action) => {
    //console.log("action",action);
          return{
            ...state,
            data:action.data
          }
    }),
 
);