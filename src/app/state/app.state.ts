import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../core/models/auth.model";
import { NewsState } from "../core/models/new.model";
import { UsersState } from "../core/models/users.state";
import { SlideState } from "../core/models/slides.model";
import { authReducer } from "./reducers/auth.reducer";
import { newsReducer } from "./reducers/news.reducers";
import { sliderReducer } from "./reducers/slider.reducers";
import { usersReducer } from "./reducers/users.reducer";


export interface AppState {
  auth: AuthState;
  data: NewsState;
  users: UsersState;
  slides: SlideState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: authReducer,
  data: newsReducer,
  users: usersReducer,
  slides: sliderReducer
};
