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
    return {
      ...state,
      data: action.data,
    };
  }),

  on(actions.createNews, (state, action: any) => {
    return {
      ...state,
      success: true,
      data: [...state.data, action],
    };
  }),
  on(actions.updateNews, (state, action) => {
    const tmpIndex = state.data.findIndex((resp) => resp.id == action.id);
    var tmpState: any = state.data;
    tmpState[tmpIndex] = action.data;
    return {
      ...state,
      data: tmpState,
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
