import { useSelector, useDispatch } from "react-redux";
import { todos } from "../reducers/todoSlice";
import  { hide } from "../reducers/hideSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import './List.css';

const Todo = ({ todo }) => {
  const hidden = useSelector((store) => store.hide);

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(hide.actions.isCompleted());
    console.log(hidden);
  }

  return (
    <div className="todoContainer">
      <div className="todoItem">
        <span>{todo.text}</span>
        <DeleteIcon onClick={() => dispatch(todos.actions.removeTodo(todo))} />
      </div>
      <form>
        <input type="checkbox" id="completed" onChange={handleChange}/>
        <label htmlFor="completed">Completed</label>
      </form>
    </div>
  );
};

export default Todo;
