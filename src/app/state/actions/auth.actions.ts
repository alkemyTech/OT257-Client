import { Action, createAction, props } from "@ngrx/store";
import { UserLogin, UserRegister } from "src/app/core/models/auth.model";

export enum AuthActionTypes {
  LOGIN = "[Auth] Login",
  LOGIN_SUCCESS = "[Auth] Login Success",
  LOGIN_FAILURE = "[Auth] Login Failure",
  SIGNUP = "[Auth] Signup",
  SIGNUP_SUCCESS = "[Auth] Signup Success",
  SIGNUP_FAILURE = "[Auth] Signup Failure",
  LOGOUT = "[Auth] Logout",
  GET_STATUS = "[Auth] GetStatus",
}

export const logIn = createAction(
  AuthActionTypes.LOGIN,
  props<{ payload: UserLogin }>()
);

export const logInSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ payload: any }>()
);

export const logInFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{ payload: any }>()
);

export const signUp = createAction(
  AuthActionTypes.SIGNUP,
  props<{ payload: UserRegister }>()
);

export const signUpSuccess = createAction(
  AuthActionTypes.SIGNUP_SUCCESS,
  props<{ payload: any }>()
);

export const signUpFailure = createAction(
  AuthActionTypes.SIGNUP_FAILURE,
  props<{ payload: any }>()
);

export const logOut = createAction(AuthActionTypes.LOGOUT);

export const getStatus = createAction(AuthActionTypes.GET_STATUS);
