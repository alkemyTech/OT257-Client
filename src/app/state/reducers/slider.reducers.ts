import { createReducer, on } from "@ngrx/store";
import { SlideState } from "../../core/models/slides.model";
import { loadSliders, loadedSliders } from "../actions/slider.actions";

export const initialState: SlideState = {
  loading: false,
  sliders: [],
};

export const sliderReducer = createReducer(
  initialState,
  on(loadSliders, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedSliders, (state, { sliders }) => {
    return { ...state, loading: false, sliders };
  })
);
