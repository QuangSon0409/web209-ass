import { useSelector } from "react-redux";
import { IRootState } from "../Store";

const ShowInfor = () => {
  const resultState = useSelector((state: IRootState) => state.result);
  return <div>Hiển thị giá trị của Phép toán: {resultState.result}</div>;
};

export default ShowInfor;
