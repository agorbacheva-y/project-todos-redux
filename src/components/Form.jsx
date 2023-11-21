import { useState } from 'react';
import { todos } from '../reducers/todos';
import { useDispatch } from 'react-redux';

const Form = () => {
  const [ newTask, setNewTask ] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <form onSubmit={(e) => dispatch(todos.actions.addTodo(newTask)) }>
        <label>
          <p>Task</p>
          <input 
            type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}  
          />
        </label>
        <button type="submit">add todo</button>
      </form>
    </div>
  );
};

export default Form;
