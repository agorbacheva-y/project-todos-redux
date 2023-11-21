import { useSelector } from "react-redux";
import Todo from './Todo';

const List = () => {
  const todos = useSelector((store) => store.todos);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
