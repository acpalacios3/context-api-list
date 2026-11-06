import { useState,useContext } from "react";
// import { TodoContext } from "../context/TodoContext";
import useTodos from "../hooks/useTodos";


export default function TestTodos() {

//   const { todos, addTodo, toggleTodo, deleteTodo,editTodo,clearCompleted} = useContext(TodoContext);
  const [text, setText] = useState("");

 const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      return;
    }

    addTodo(text);

    setText("");
  };


  return (
    <form onSubmit={handleSubmit}>

      <h2>Test Todos</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />

      <button onClick={() => addTodo("Study React")}>
        Add Todo
      </button>

      {/* <button onClick={() => toggleTodo(1)}>
        Toggle Todo 1
      </button>

      <button onClick={() => deleteTodo(1)}>
        delete Todo 1
      </button>

      <button onClick={() => editTodo(1, "JavaScript")}>
        edit Todo 1
      </button> */}

    
      
    </form>
  );
}