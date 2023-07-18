import { CountAction } from "./action";

// khai báo các type chung
export const CONG = "CONG";
export const TRU = "TRU";
export const NHAN = "NHAN";
export const CHIA = "CHIA";

// định nghĩa dispatchType
export type DispatchType = (arg: CountAction) => CountAction;
