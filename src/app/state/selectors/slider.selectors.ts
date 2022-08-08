import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { SlideState } from "src/app/core/models/slides.model";

export const selectSlidesFeature = (state: AppState) => state.slides;

export const selectSlideList = createSelector(
  selectSlidesFeature,
  (state: SlideState) => state.sliders
);

export const selectSlideLoading = createSelector(
  selectSlidesFeature,
  (state: SlideState) => state.loading
);

export const selectOneSlide = createSelector(
  selectSlidesFeature,
  (state: SlideState) => state.one_slider
);
