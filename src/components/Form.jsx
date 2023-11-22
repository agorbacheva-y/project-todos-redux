import { useState } from 'react';
import { todos } from '../reducers/todos';
import { useDispatch } from 'react-redux';

const Form = () => {
  const [ newTask, setNewTask ] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(todos.actions.addTodo(newTask));
    setNewTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
