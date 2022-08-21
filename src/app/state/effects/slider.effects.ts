import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { SlideFormService } from "src/app/core/services/slide-form.service";
import { SliderActionTypes } from "../actions/slider.actions";

@Injectable()
export class SliderEffect {
  constructor(
    private actions$: Actions,
    private sliderService: SlideFormService
  ) {}

  loadSliders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SliderActionTypes.LOAD_SLIDERS),
      mergeMap(() =>
        this.sliderService.getSlide().pipe(
          map((sliders) => ({
            type: SliderActionTypes.LOADED_SLIDERS,
            sliders: sliders.data,
            loading: true,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteSlider$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SliderActionTypes.DELETE_SLIDER),
      mergeMap(({ id }) =>
        this.sliderService.deleteSlide(id).pipe(
          map((res) => ({
            type: SliderActionTypes.DELETED_SLIDER,
            res,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  postSlider$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SliderActionTypes.POST_SLIDER),
      mergeMap((slider) =>
        this.sliderService.saveSlide(slider).pipe(
          map((res) => ({
            type: SliderActionTypes.POST_SLIDER_SUCCESS,
            slider: res.data,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateSlider$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SliderActionTypes.UPDATE_SLIDER),
      mergeMap(({ slider, id }) =>
        this.sliderService.updateSlide(slider, id).pipe(
          map((result) => ({
            type: SliderActionTypes.UPDATE_SLIDER_STATE,
            slider: result.data
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
