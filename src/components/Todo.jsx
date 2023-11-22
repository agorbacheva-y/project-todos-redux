import { useDispatch } from "react-redux";
import { todos } from "../reducers/todos";
import DeleteIcon from "@mui/icons-material/Delete";
import './List.css';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todoContainer">
      <span>{todo.text}</span>
      <DeleteIcon onClick={() => dispatch(todos.actions.removeTodo(todo))} />
    </div>
  );
};

export default Todo;
