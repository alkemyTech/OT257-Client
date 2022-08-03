import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/core/services/auth/auth.service";
import { map, mergeMap, catchError } from "rxjs/operators";
import {
  AuthActionTypes,
  logInSuccess,
  logInFailure,
  signUpSuccess,
  signUpFailure,
  logOut,
} from "../actions/auth.actions";
import { EMPTY } from "rxjs";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$?.pipe(
      ofType(AuthActionTypes.LOGIN),
      mergeMap((action) =>
        this.authService.login(action).pipe(
          map((res: any) => {
            if (res.data.token) {
              this.authService.saveToken(res.token);
              this.router.navigate(["/backoffice"]);
            }
            return logInSuccess(res);
          }),
          catchError(() =>
            EMPTY.pipe(map((err: Error) => logInFailure({ payload: err })))
          )
        )
      )
    )
  );

  signUp$ = createEffect(() =>
    this.actions$?.pipe(
      ofType(AuthActionTypes.SIGNUP),
      mergeMap((action) =>
        this.authService.register(action).pipe(
          map((res: any) => {
            this.router.navigate(["/iniciar-sesion"]);
            return signUpSuccess(res);
          }),
          catchError(() =>
            EMPTY.pipe(map((err: Error) => signUpFailure({ payload: err })))
          )
        )
      )
    )
  );

  logOut$ = createEffect(() =>
    this.actions$?.pipe(
      ofType(AuthActionTypes.LOGOUT),
      mergeMap(() => {
        this.authService.logout();
        return EMPTY;
      }),
      map(() => logOut())
    )
  );
}
