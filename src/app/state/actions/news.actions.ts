import { Action, createAction, props } from "@ngrx/store";
import { NewModel } from '../../core/models/new.model';


export const loadNews = createAction(
  '[News List] Load News'
  );

export const loadedNews = createAction(
  '[News List] Loaded success',
  props<{ data: NewModel[] }>()
);

