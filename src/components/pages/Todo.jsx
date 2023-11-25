import { useDispatch } from "react-redux";
import { removeTodo, isCompleted } from "../../reducers/todoSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import './List.css';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(isCompleted({ id: todo.id}));
  }

  return (
    <div className="todoContainer">
      <div className="todoItem">
        <span>{todo.text}</span>
        <DeleteIcon style={{ color: "gray" }}onClick={() => dispatch(removeTodo(todo))} />
      </div>
      <div>
        <p>created: {todo.created}</p>
        <p>due: {todo.due}</p>
      </div>
      <form>
        <input type="checkbox" id="completed" checked={todo.completed} onChange={handleChange}/>
        <label htmlFor="completed">Completed</label>
      </form>
    </div>
  );
};

export default Todo;
