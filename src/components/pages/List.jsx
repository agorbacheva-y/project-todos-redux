import { useState } from "react";
import { useSelector } from "react-redux";
import Todo from './Todo';
import Completed from "../Completed";
import './List.css';

const List = () => {
  const [ isHidden, setIsHidden ] = useState(false);
  const todos = useSelector((store) => store.todos);

  const handleClick = () => {
    // state changes back after second click
    setIsHidden(prev => prev === false ? true : false);
  }

  return (
    <>
      <div className='hideBtn'>
        <button onClick={handleClick}>{isHidden ? <p>Show completed</p> : <p>Hide completed</p>}</button>
        <Completed />
      </div>

      <div className="listContainer">
        {todos.map((todo) => (
          <div key={todo.id} style={{ display: isHidden && todo.completed ? "none" : "" }} >
            <Todo todo={todo} />
          </div>
        ))}
      </div>
      
    </>
    
  );
};

export default List;
