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
  on(actions.updatedNews, (state,action:any) => {
    console.log("state",state,"action",action);
          for(let i = 0; i < state.data.length; i++) {
          var newState:any=state;
            //console.log("action.data.id",action.id);
      //console.log("state.data[i].id",state.data[i].id);

              if (newState.data[i].id==action.id){
                newState.data[i]=action;
              }
                   
          }
          return{
            ...state,
            data:newState
          }
    }),
 
);