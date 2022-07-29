import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectAuthState = (state: AppState) => state.auth;

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);
