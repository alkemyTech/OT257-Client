import { Action, createAction, props } from "@ngrx/store";
import { NewModel } from '../../core/models/new.model';



export const loadedNews = createAction(
  '[News List] Loaded success',
  props<{ news: NewModel[] }>()
);

