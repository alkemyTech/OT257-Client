import { createSelector } from "@ngrx/store";
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

export const deletedUser = createSelector(
    selectUsers,
    (state: UsersState) => state.deletedUser
);
