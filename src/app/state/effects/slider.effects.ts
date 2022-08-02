import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SlideFormService } from 'src/app/core/services/slide-form.service';
import { SliderActionTypes } from '../actions/slider.actions';


@Injectable()
export class SliderEffect{

    loadSliders$ = createEffect(() => this.actions$.pipe(
        ofType(SliderActionTypes.LOAD_SLIDERS),
        mergeMap(()=>this.sliderService.getSlide().pipe(
            map(sliders => ({type: SliderActionTypes.LOADED_SLIDERS, sliders: sliders.data, loading:true })),
            catchError(()=> EMPTY)
        ))
    ));

    deleteSliders$ = createEffect(() => this.actions$.pipe(
        ofType(SliderActionTypes.DELETE_SLIDER),
        mergeMap((id)=>this.sliderService.deleteSlide(id).pipe(
            map(() => ({type: SliderActionTypes.DELETED_SLIDER_SUCCESS, id })),
            catchError(()=> EMPTY)
        ))
    ));

    constructor(private actions$: Actions,
                private sliderService: SlideFormService){

    }

}
