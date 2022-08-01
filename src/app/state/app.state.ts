import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../core/models/auth.model";
import { SlideState } from "../core/models/slides.model";
import { authReducer } from "./reducers/auth.reducer";
import { sliderReducer } from "./reducers/slider.reducers";

export interface AppState {
  auth: AuthState;
  slides: SlideState;

}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: authReducer,
  slides: sliderReducer
};
