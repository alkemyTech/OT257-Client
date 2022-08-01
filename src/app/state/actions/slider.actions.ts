import { createAction, props } from "@ngrx/store";
import { Slides } from "src/app/core/models/slides.model";

export const loadSliders = createAction("[slides] load sliders");

export const loadedSliders = createAction(
  "[slides] get sliders",
  props<{ sliders: Slides[] }>()
);
