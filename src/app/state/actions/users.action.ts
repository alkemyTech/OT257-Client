import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/models/user.model";

// llamo para cargar los usuarios

export const loadUsers = createAction("[Users List] Load Users", props<{ user: User }>());

// los usuarios se llamaron correctamente desde la API

export const retrievedUsersList = createAction(
    "[Users List/Api] Retrieved Users List Successfully",
    props<{ users: ReadonlyArray<User> }>()
);
