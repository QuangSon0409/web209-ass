import { CountAction } from "./action";
import * as actions from "./type";
export interface IResultState {
  result: number;
}
const initCongState: IResultState = {
  result: 0,
};
const resultReducer = (
  state: IResultState = initCongState,
  action: CountAction
): IResultState => {
  switch (action.type) {
    case actions.CONG:
      state = {
        ...state,
        result: action.payload.a + action.payload.b,
      };
      break;
    case actions.TRU:
      state = {
        ...state,
        result: action.payload.a - action.payload.b,
      };
      break;
    case actions.NHAN:
      state = {
        ...state,
        result: action.payload.a * action.payload.b,
      };
      break;

    case actions.CHIA:
      state = {
        ...state,
        result: action.payload.a / action.payload.b,
      };
      break;
  }
  return state;
};
export default resultReducer;
