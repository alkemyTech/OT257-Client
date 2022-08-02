import { createReducer, on } from '@ngrx/store';
import { UsersState } from 'src/app/core/models/users.state';
import { loadUsers, loadedUsers } from '../actions/users.action';

export const initialState: UsersState = {
    loading: false,
    users: []
}

export const usersReducer = createReducer(
    initialState,
    on(loadUsers, (state) => {
        return { ...state, loading: true }
    }),
    on(loadedUsers, (state, { users }) => {
        return { ...state, loading: false, users }
    })

);

