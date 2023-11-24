import { useState } from 'react';
import { addTodo } from '../../reducers/todoSlice';
import { useDispatch } from 'react-redux';
import './Form.css';

const Form = () => {
  const [ newTask, setNewTask ] = useState("");
  const [ currentTime, setCurrentTime ] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text: newTask, time: currentTime } ));
    setNewTask("");
  };

  const handleClick = () => {
    let timeCreated = new Date().toLocaleTimeString('sv-SE');
    let dateCreated = new Date().toLocaleDateString('sv-SE');
    let timestamp = `${dateCreated} at ${timeCreated}`;

    setCurrentTime(timestamp);
  };

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit} className='formInput'>
        <label>
          <p>Add Todo</p>
          <input 
            type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}  
          />
        </label>
        <button type="submit" onClick={handleClick}>add todo</button>
      </form>
    </div>
  );
};

export default Form;
