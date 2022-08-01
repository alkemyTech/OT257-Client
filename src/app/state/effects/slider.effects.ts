import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SlideFormService } from 'src/app/core/services/slide-form.service';


@Injectable()
export class SliderEffect{

    loadSliders$ = createEffect(() => this.actions$.pipe(
        ofType("[slides] load sliders"),
        mergeMap(()=>this.sliderService.getSlide().pipe(
            map(sliders => ({type: '[slides] get sliders', sliders: sliders.data})),
            catchError(()=> EMPTY)
        ))
    ));

    constructor(private actions$: Actions,
                private sliderService: SlideFormService){

    }
}
