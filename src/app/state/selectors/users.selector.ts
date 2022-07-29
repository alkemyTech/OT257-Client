import { createFeatureSelector } from "@ngrx/store";
import { User } from "src/app/core/models/user.model";


export const selectUsers = createFeatureSelector<ReadonlyArray<User>>("users");