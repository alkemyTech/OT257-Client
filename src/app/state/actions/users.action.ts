import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/models/user.model";

// llamo para cargar los usuarios

export const loadUsers = createAction("[Users List] Load Users");

// los usuarios se llamaron correctamente desde la API

export const loadedUsers = createAction(
    "[Users List] Retrieved Users List Successfully",
    props<{ users: User[] }>()
);
