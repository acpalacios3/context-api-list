import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TestTodos() {

  const { todos, addTodo, toggleTodo, deleteTodo,editTodo} = useContext(TodoContext);

  return (
    <div>
      <h2>Test Todos</h2>

      <button onClick={() => addTodo("Study React")}>
        Add Todo
      </button>

      <button onClick={() => toggleTodo(1)}>
        Toggle Todo 1
      </button>

      <button onClick={() => deleteTodo(1)}>
        delete Todo 1
      </button>

      <button onClick={() => editTodo(1, "JavaScript")}>
        edit Todo 1
      </button>

    
      
    </div>
  );
}