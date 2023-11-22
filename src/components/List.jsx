import { useSelector } from "react-redux";
import Todo from './Todo';
import './List.css';

const List = () => {
  const todos = useSelector((store) => store.todos);

  return (
    <div className="listContainer">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
