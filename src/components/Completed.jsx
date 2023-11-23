import { useSelector } from "react-redux";
import "./Completed.css";

const Completed = () => {
  const todos = useSelector((store) => store.todos);

  const totalCompleted = todos.filter((todo) => 
    todo.completed === true
  );

  return (
    <div className="totalCompleted">
      <p>completed {totalCompleted.length}/{todos.length}</p>
    </div>
  );
};

export default Completed;
