import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../core/models/auth.model";
<<<<<<< HEAD
import { NewsState } from "../core/models/new.model";
import { authReducer } from "./reducers/auth.reducer";
import { newsReducer } from "./reducers/news.reducers";



export interface AppState {
    auth: AuthState;
    data: NewsState;
=======
import { UsersState } from "../core/models/users.state";
import { authReducer } from "./reducers/auth.reducer";
import { usersReducer } from "./reducers/users.reducer";
import { SlideState } from "../core/models/slides.model";
import { sliderReducer } from "./reducers/slider.reducers";

export interface AppState {
  auth: AuthState;
  users: UsersState;
  slides: SlideState;
>>>>>>> eb5fb41f2ad3c2caf9e275cf27df17efbc16eb87
}


export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
<<<<<<< HEAD
    auth: authReducer,
    data: newsReducer
}
=======
  auth: authReducer,
  users: usersReducer,
  slides: sliderReducer
}




>>>>>>> eb5fb41f2ad3c2caf9e275cf27df17efbc16eb87
