import { useDispatch } from "react-redux";
import { todos } from "../reducers/todos";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{todo.text}</span>
      <DeleteIcon onClick={() => dispatch(todos.actions.removeTodo(todo))} />
    </div>
  );
};

export default Todo;
