import useTodos from "../hooks/useTodos";
import { useState } from "react";

export default function TodoItem({ todo }) {

    const { toggleTodo, deleteTodo, editTodo } = useTodos();

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    
    // funcion edit item
    const handleSave = () => {
    if (editText.trim() === "") {
      setEditText(todo.text);
      setIsEditing(false);
      return;
    }

    editTodo(todo.id, editText);
    setIsEditing(false);
  };

//   function cancel Edit
  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

 
  return (
    <li className="todo-item">
       <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          autoFocus
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSave();
            }

            if (e.key === "Escape") {
              handleCancel();
            }
          }}
        />
      ) : (
        <span>{todo.text}</span>
      )}

      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}

      <button onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>

    </li>
  );

}