import { useState } from "react";
import useTodos from "../hooks/useTodos";
import TodoItem from "./TodoItem";

export default function TodoList() {

    const { todos, clearCompleted } = useTodos();

    const [filter, setFilter] = useState("all");

    //   filter de items
    const filteredTodos = todos.filter(todo => {
        if (filter === "active") {
            return !todo.completed;
        }

        if (filter === "completed") {
            return todo.completed;
        }

        return true;
    });


    //   count the items whose completed status is true
    const completedCount = todos.filter(todo => todo.completed).length;
    const itemsLeft = todos.filter(todo => !todo.completed).length;

    return (
        <div>
            <div className="todo-filters">
                <button
                    className={filter === "all" ? "active" : ""}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>

                <button
                    className={filter === "active" ? "active" : ""}
                    onClick={() => setFilter("active")}
                >
                    Active
                </button>

                <button
                    className={filter === "completed" ? "active" : ""}
                    onClick={() => setFilter("completed")}
                >
                    Completed
                </button>
            </div>

            <div className="container-items-list">
                <ul className="items-list">
                    {filteredTodos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                        />
                    ))}
                </ul>

            </div>

            <div className="Todo-footer">
                <span className="clear-completed"
                    onClick={clearCompleted}
                >
                    Clear Completed ({completedCount})
                </span>

                <p className="items-left">
                    {itemsLeft} items left
                </p> 
            </div>    

        </div>
    );
}