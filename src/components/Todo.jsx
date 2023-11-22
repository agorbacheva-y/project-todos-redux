import { useDispatch } from "react-redux";
import { todos } from "../reducers/todos";
import DeleteIcon from "@mui/icons-material/Delete";
import './List.css';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todoContainer">
      <div className="todoItem">
        <span>{todo.text}</span>
        <DeleteIcon onClick={() => dispatch(todos.actions.removeTodo(todo))} />
      </div>
      <form>
        <input type="checkbox" id="completed" name="completed"/>
        <label htmlFor="completed">Completed</label>
      </form>
    </div>
  );
};

export default Todo;
