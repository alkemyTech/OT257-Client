import { createReducer, on } from "@ngrx/store";
import { Slides, SlideState } from "../../core/models/slides.model";
import {
  loadSliders,
  loadedSliders,
  deleteSlider,
  postSlider,
  postSliderSuccess,
  getOneSlide,
  updateSliderState,
} from "../actions/slider.actions";

export const initialState: SlideState = {
  loading: false,
  sliders: [],
  one_slider: {
    id: 0,
    name: "",
    description: "",
    image: "",
    order: 0,
    user_id: 0,
    created_at: "",
    updated_at: "",
    deleted_at: "",
  },
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
    const slidersDelete = state.sliders.filter((sliders) => {
      return sliders.id !== id;
    });
    return { ...state, sliders: slidersDelete };
  }),
  on(postSliderSuccess, (state, { slider }) => {
    return { ...state, loading: false, sliders: [...state.sliders, slider] };
  }),
  on(postSlider, (state) => {
    return { ...state, loading: true };
  }),
  on(getOneSlide, (state, { id }) => {
    const sliderUpdate = state.sliders.filter((slider) => {
      return slider.id == id;
    });
    return { ...state, one_slider: sliderUpdate[0] };
  }),
  on(updateSliderState, (state, { slider }) => {
    const updateListSlider = state.sliders.map((data) => {
      if (data.id == slider.id) {
        data = slider;
      }
      return data;
    });
    return { ...state, sliders: updateListSlider };
  })
);
