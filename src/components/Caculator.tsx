import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {
  congAction,
  truAction,
  nhanAction,
  chiaAction,
} from "../Store/Counter/action";
import { useState } from "react";

const Caculator = () => {
  const [numberA, setA] = useState<number>(0);
  const [numberB, setB] = useState<number>(0);

  const dispatch: Dispatch<any> = useDispatch();
  const cong = (event: any) => {
    event.preventDefault();
    dispatch(congAction(numberA, numberB));
    console.log(congAction(numberA, numberB));
  };
  const tru = (event: any) => {
    event.preventDefault();
    dispatch(truAction(numberA, numberB));
  };
  const nhan = (event: any) => {
    event.preventDefault();
    dispatch(nhanAction(numberA, numberB));
  };
  const chia = (event: any) => {
    event.preventDefault();
    dispatch(chiaAction(numberA, numberB));
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="">Số 1</label>
          <input
            type="number"
            onChange={(event) => {
              setA(Number(event.target.value));
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Số 2</label>
          <input
            type="number"
            name=""
            id=""
            onChange={(event) => {
              setB(Number(event.target.value));
            }}
          />
        </div>
        <button
          onClick={() => {
            cong(event);
          }}
        >
          Cộng
        </button>
        <button
          onClick={() => {
            tru(event);
          }}
        >
          Trừ
        </button>
        <button
          onClick={() => {
            nhan(event);
          }}
        >
          Nhân
        </button>
        <button
          onClick={() => {
            chia(event);
          }}
        >
          Chia
        </button>
      </form>
    </div>
  );
};

export default Caculator;
