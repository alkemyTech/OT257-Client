import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../core/models/auth.model";
import { User } from "../core/models/user.model";
import { UsersState } from "../core/models/users.state";
import { authReducer } from "./reducers/auth.reducer";
import { usersReducer } from "./reducers/users.reducer";

export interface AppState {
    auth: AuthState;
    users: UsersState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    auth: authReducer,
    users: usersReducer
}