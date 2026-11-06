import useTodos from "../hooks/useTodos";
import TodoItem from "./TodoItem";

export default function TodoList() {

  const { todos } = useTodos();

  return (
    <div>
      <h2>todo list</h2>

      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>

    </div>
  );
}