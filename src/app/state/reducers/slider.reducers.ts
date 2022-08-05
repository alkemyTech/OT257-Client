import { createReducer, on } from "@ngrx/store";
import { SlideFormService } from "src/app/core/services/slide-form.service";
import { SlidesFormComponent } from "src/app/features/backoffice/pages/slides/slides-form/slides-form.component";
import { SlideState } from "../../core/models/slides.model";
import {
  loadSliders,
  loadedSliders,
  deleteSlider,
  postSlider,
  postSliderSuccess,
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
  }),
  on(postSliderSuccess, (state, { slider }) => {
    return { ...state, loading:false, sliders: [...state.sliders, slider] };
  }),
  on(postSlider, (state) => {
    return {...state, loading:true}
  })
);
