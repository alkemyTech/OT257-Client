import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { UsersService } from "src/app/core/services/users/users.service";

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Users List] Load Users"),
      mergeMap(() =>
        this.usersService.getUsers().pipe(
          map((users) => ({
            type: "[Users List] Retrieved Users List Successfully",
            users: users.data,
            loading: true,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Users List] Delete User"),
      mergeMap(({ id }) =>
        this.usersService.deleteUser(id).pipe(
          map((user) => ({
            type: "[Users List] Deleted User Successfully",
            user: user.data,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
