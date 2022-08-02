import { createAction, props } from "@ngrx/store";
import { Slides } from "src/app/core/models/slides.model";

export enum SliderActionTypes {
  LOAD_SLIDERS = "[slides] load sliders",
  LOADED_SLIDERS = "[slides] get sliders",
  DELETE_SLIDER = "[slides] delete slider",
}

export const loadSliders = createAction(SliderActionTypes.LOAD_SLIDERS);

export const loadedSliders = createAction(
  SliderActionTypes.LOADED_SLIDERS,
  props<{ sliders: Slides[] }>()
);

export const deleteSlider = createAction(
  SliderActionTypes.DELETE_SLIDER,
  props<{ id: string }>()
);
