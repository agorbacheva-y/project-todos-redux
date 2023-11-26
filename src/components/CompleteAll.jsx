import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeAll } from "../reducers/todoSlice";
import highFive from "../hiFive.svg";

import "./CompleteAll.css";

const CompleteAll = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);

  const [allCompleted, setAllCompleted] = useState(false);

  useEffect(() => {
    if (todos.every((todo) => todo.completed === true)) {
      setAllCompleted(true);
    } else {
      setAllCompleted(false);
    }
  }, [todos]);

  const handleClick = () => {
    dispatch(completeAll());
  };

  return (
    <>
      {allCompleted ? (
        <div className="completeImg">
          <img src={highFive}></img>
          <p>Great job! You completed all your tasks!</p>
        </div>
      ) : (
        <div className="completeAll">
          <button onClick={handleClick}>Complete all</button>
        </div>
      )}
    </>
  );
};

export default CompleteAll;
