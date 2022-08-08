import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../core/models/auth.model";
import { NewsState } from "../core/models/new.model";
import { authReducer } from "./reducers/auth.reducer";
import { newsReducer } from "./reducers/news.reducers";

export interface AppState {
  auth: AuthState;
  data: NewsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: authReducer,
  data: newsReducer,
};
