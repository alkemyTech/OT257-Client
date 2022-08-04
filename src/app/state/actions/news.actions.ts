import { Action, createAction, props } from "@ngrx/store";
import { NewModel } from "../../core/models/new.model";

export enum NewActionTypes {
  LOAD_NEW = "[News] Load success",
  LOADED_NEW = "[News] Loaded success",
  CREATE_NEW = "[News] Create success",
  CREATED_NEW = "[News] Created success",
  DELETE_NEW = "[News] Delete success",
  DELETED_NEW = "[News] Deleted success",
  UPDATE_NEW = "[News] Update success",
  UPDATED_NEW = "[News] Updated success",
}

export const loadNews = createAction(NewActionTypes.LOAD_NEW);

export const loadedNews = createAction(
  NewActionTypes.LOADED_NEW,
  props<{ data: NewModel[] }>()
);

export const createNews = createAction(
  NewActionTypes.CREATE_NEW,
  props<{ data: NewModel }>()
);
export const createdNews = createAction(
  NewActionTypes.CREATED_NEW,
  props<{ data: NewModel }>()
);

export const updateNews = createAction(
  NewActionTypes.UPDATE_NEW,
  props<{ id: string; data: NewModel }>()
);

export const updatedNews = createAction(NewActionTypes.UPDATED_NEW);

export const deleteNews = createAction(
  NewActionTypes.DELETE_NEW,
  props<{ id: string }>()
);

export const deletedNews = createAction(NewActionTypes.DELETED_NEW);
