import { useState } from "react";
import { useSelector } from "react-redux";
import Todo from './Todo';
import './List.css';

const List = () => {
  const [ isHidden, setIsHidden ] = useState(false);
  const todos = useSelector((store) => store.todos);

  const handleClick = () => {
    setIsHidden(true);
  }

  return (
    <>
      <div className='hideBtn'>
        <button onClick={handleClick}>Hide completed</button>
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
