import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../core/models/auth.model";
import { UsersState } from "../core/models/users.state";
import { authReducer } from "./reducers/auth.reducer";
import { usersReducer } from "./reducers/users.reducer";
import { SlideState } from "../core/models/slides.model";
import { sliderReducer } from "./reducers/slider.reducers";
import { NewsState } from "../core/models/new.model";
import { newsReducer } from "./reducers/news.reducers";

export interface AppState {
  auth: AuthState;
  users: UsersState;
  slides: SlideState;
  data: NewsState;
}


export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    auth: authReducer,
    data: newsReducer,
    users: usersReducer,
    slides: sliderReducer
}

