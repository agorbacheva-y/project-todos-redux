import { useState } from 'react';
import { addTodo } from '../../reducers/todoSlice';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import './Form.css';

const Form = () => {
  const [ newTask, setNewTask ] = useState("");
  const [ currentTime, setCurrentTime ] = useState("");
  const [ date, setDate ] = useState(new Date());
  const [ priority, setPriority ] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text: newTask, time: currentTime, due: date.toLocaleDateString('sv-SE'), priority: priority } ));
    setNewTask("");
    setCurrentTime("");
    setDate(new Date());
    setPriority("");
  };

  const handleClick = () => {
    let dateCreated = new Date().toLocaleDateString('sv-SE');
    let timestamp = dateCreated;
    setCurrentTime(timestamp);
  };

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit} className='formInput'>
        <label>
          <p>Add Todo</p>
          <input 
            type="text" required value={newTask} onChange={(e) => setNewTask(e.target.value)}  
          />
        </label>

        <div>
          <label>Select priority: </label>
          <select onChange={(e) => setPriority(e.target.value)} >
            <option defaultValue="" hidden>---Select---</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        </div>
        
        <div className='formDueDate'>
          <label>Due: </label>
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
        </div>
        <button type="submit" onClick={handleClick}>add todo</button>
      </form>
    </div>
  );
};

export default Form;
