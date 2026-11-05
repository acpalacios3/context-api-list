import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TestTodos() {

  const { todos, addTodo} = useContext(TodoContext);

  return (
    <div>
      <h2>Test Todos</h2>

      <button onClick={() => addTodo("Study React")}>
        Add Todo
      </button>
      
    </div>
  );
}