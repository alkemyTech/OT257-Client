import { createReducer, on } from '@ngrx/store';
import { UsersState } from 'src/app/core/models/users.state';
import { loadUsers, loadedUsers, deleteUser, deletedUser } from '../actions/users.action';

export const initialState: UsersState = {
    loading: false,
    users: [],
    deletedUser: null
}

export const usersReducer = createReducer(
    initialState,
    on(loadUsers, (state) => {
        return { ...state, loading: true }
    }),
    on(loadedUsers, (state, { users }) => {
        return { ...state, loading: false, users }
    }),
    on(deleteUser, (state, { id }) => {
        return { ...state, loading: true }
    }),
    on(deletedUser, (state, { user }) => {
        return { ...state, loading: false, users: state.users.filter(u => u.id !== user.id) }
    }),


);

