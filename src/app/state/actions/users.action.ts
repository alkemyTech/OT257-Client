import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/models/user.model";

export const addUser = createAction("[Users List] Add User", props<{ user: User }>());

export const retrievedUsersList = createAction(
    "[Users List/Api] Retrieved Users List Successfully",
    props<{ users: ReadonlyArray<User> }>()
);
