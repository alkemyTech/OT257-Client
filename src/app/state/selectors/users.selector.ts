import { createSelector } from "@ngrx/store";
import { User } from "src/app/core/models/user.model";
import { UsersState } from "src/app/core/models/users.state";
import { AppState } from "../app.state";


export const selectUsers = (state: AppState) => state.users;

export const selectUsersList = createSelector(
    selectUsers,
    (state: UsersState) => state.users
);

export const selectUsersLoading = createSelector(
    selectUsers,
    (state: UsersState) => state.loading
);
