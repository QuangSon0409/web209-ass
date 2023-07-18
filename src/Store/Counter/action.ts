import * as actionType from "./type";
import { DispatchType } from "./type";
export interface INumberType {
  a: number;
  b: number;
}
export type CountAction = {
  type: string;
  payload: INumberType;
};
export const congAction = (a: number, b: number) => {
  const action: CountAction = {
    type: actionType.CONG,
    payload: {
      a,
      b,
    },
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
};
export const truAction = (a: number, b: number) => {
  const action: CountAction = {
    type: actionType.TRU,
    payload: {
      a: a,
      b: b,
    },
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
};
export const nhanAction = (a: number, b: number) => {
  const action: CountAction = {
    type: actionType.NHAN,
    payload: {
      a: a,
      b: b,
    },
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
};
export const chiaAction = (a: number, b: number) => {
  const action: CountAction = {
    type: actionType.CHIA,
    payload: {
      a: a,
      b: b,
    },
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
};
