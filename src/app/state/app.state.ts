import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../core/models/auth.model";
import { UsersState } from "../core/models/users.state";
import { authReducer } from "./reducers/auth.reducer";
import { usersReducer } from "./reducers/users.reducer";
import { SlideState } from "../core/models/slides.model";
import { sliderReducer } from "./reducers/slider.reducers";

export interface AppState {
  auth: AuthState;
  users: UsersState;
  slides: SlideState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: authReducer,
  users: usersReducer,
  slides: sliderReducer
}




