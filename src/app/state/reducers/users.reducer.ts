import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';
import { addUser, retrievedUsersList } from '../actions/users.action';

export const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
    initialState,
    on(addUser, (oldState, { user }) => {
        return [...oldState, ...[user]];
    }),
    on(retrievedUsersList, (oldState, { users }) => {
        return [...oldState, ...users];
    })
);

