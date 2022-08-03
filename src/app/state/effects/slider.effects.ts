import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { SlideFormService } from "src/app/core/services/slide-form.service";
import { SliderActionTypes } from "../actions/slider.actions";

@Injectable()
export class SliderEffect {
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
      mergeMap(({id}) =>
        this.sliderService.deleteSlide(id).pipe(
          map((res) => ({
            type: SliderActionTypes.DELETED_SLIDER, res

          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  

  constructor(
    private actions$: Actions,
    private sliderService: SlideFormService
  ) {}
}
