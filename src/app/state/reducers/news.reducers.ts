import { createReducer, on } from "@ngrx/store";
import { NewModel, NewsState } from "../../core/models/new.model";
import * as actions from "../actions/news.actions";

export const initialState: {
  success: boolean;
  data: ReadonlyArray<NewModel>;
} = {
  success: false,
  data: [],
};

export const newsReducer = createReducer(
  initialState,
  on(actions.loadedNews, (state, action) => {
    //console.log("action",action);
    return {
      ...state,
      data: action.data,
    };
  }),

  on(actions.createNews, (state, action: any) => {
    console.log("state", state, "action data", action);

    return {
      ...state,
      success: true,
      data: [...state.data, action],
    };
  }),
  on(actions.updateNews, (state, action:any) => {
    console.log("state", state, "action", action);
    const tmpIndex = state.data.map((resp) => resp.id).indexOf(action.id);
    console.log(tmpIndex);
    //const tmpState = state.data[tmpIndex]
    return {
      ...state,
    };
  }),

  on(actions.deleteNews, (state, action) => {
    const tmpState = state.data.filter((resp) => resp.id != action.id);
    return {
      ...state,
      data: tmpState,
    };
  })
);
