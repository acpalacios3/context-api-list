import useTodos from "../hooks/useTodos";
import TodoItem from "./TodoItem";

export default function TodoList() {

  const { todos } = useTodos();

  return (
    <div>
      <div className="container-items-list"> 
      <ul className="items-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>

      </div>   

    </div>
  );
}