import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { NewsState } from '../../core/models/new.model';

export const selectNewsFeature = (state: AppState) => state.data;


export const selectLoading = createSelector(
  selectNewsFeature,
  (state) => state.success
);

export const selectListNew = createSelector(
  selectNewsFeature,
  (state) => state.data
);
