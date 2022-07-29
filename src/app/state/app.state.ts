import { ActionReducerMap} from "@ngrx/store";
import { AuthState } from "../core/models/auth.model";
import { NewsState } from "../core/models/new.model";
import { authReducer } from "./reducers/auth.reducer";
import { newsReducer } from "./reducers/news.reducers";



export interface AppState {
    auth: AuthState;
    news: NewsState;
}


export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    auth: authReducer,
    news: newsReducer
}