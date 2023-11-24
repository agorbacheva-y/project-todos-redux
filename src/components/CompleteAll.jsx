import { useDispatch } from "react-redux";
import { completeAll } from "../reducers/todoSlice";

import "./CompleteAll.css";

const CompleteAll = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(completeAll(true));
  };

  return (
    <div>
      <button onClick={handleClick}>Complete all</button>
    </div>
  );
};

export default CompleteAll;
