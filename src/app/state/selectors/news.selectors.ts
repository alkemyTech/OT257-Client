import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { NewsState } from '../../core/models/new.model';

export const selectNewsFeature = (state: AppState) => state.news;

export const selectListNew = createSelector(
  selectNewsFeature,
  (state:NewsState) => state.news
);
