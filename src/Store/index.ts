import thunk from "redux-thunk";
import resultReducer, { IResultState } from "./Counter/reduce";
import { combineReducers, createStore, applyMiddleware } from "redux";

export interface IRootState {
  result: IResultState;
}
const rootReducer = combineReducers({
  result: resultReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
