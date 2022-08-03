import { Action, createAction, props } from "@ngrx/store";
import { NewModel } from '../../core/models/new.model';


export const loadNews = createAction(
  '[News List] Load News'
  );

export const loadedNews = createAction(
  '[News List] Loaded success',
  props<{ data: NewModel[] }>()
);

export const createdNews = createAction(
  '[News List] Create success',
  props<{ data: NewModel }>()
);


export const updateNews = createAction(
  '[News List] Update News'
  );
export const updatedNews = createAction(
  '[News List] Update success',
  props<{ id: string,
         data: any
         }>()
);

export const deletedNews = createAction(
  '[News List] Delete success',
  props<{ id: string }>()
);

