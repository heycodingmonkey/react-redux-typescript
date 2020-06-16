import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { customerReducer } from "../reducers/customers";
import { AppActions } from "../types/actions";

export const rootReducer = combineReducers({
  customers: customerReducer,
});
export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
