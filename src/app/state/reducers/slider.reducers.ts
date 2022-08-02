import { createReducer, on } from "@ngrx/store";
import { SlideState } from "../../core/models/slides.model";
import {
  loadSliders,
  loadedSliders,
  deleteSlider,
} from "../actions/slider.actions";

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
  }),
  on(deleteSlider, (state, { id }) => {
    const slidersUpdate = state.sliders.filter((sliders) => {
      return sliders.id !== id;
    });
    return { ...state, sliders: slidersUpdate };
  })
);
