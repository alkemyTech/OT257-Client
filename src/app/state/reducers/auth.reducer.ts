import { AuthState } from "src/app/core/models/auth.model";
import {
  logIn,
  logInFailure,
  logOut,
  signUp,
  signUpFailure,
} from "../actions/auth.actions";
import { createReducer, on } from "@ngrx/store";


export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null,
};

export const authReducer = createReducer(
  initialState,
  on(logIn, (state, action) => {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload,
      errorMessage: null,
    };
  }),
  on(logInFailure, (state, action) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
      errorMessage: action.payload
    };
  }),
  on(signUp, (state, action) => {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload,
      errorMessage: null,
    };
  }),
  on(signUpFailure, (state, action) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
      errorMessage: action.payload
    };
  }),
  on(logOut, (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
      errorMessage: null,
    };
  })
);


