import { useState, useContext } from "react";
// import { TodoContext } from "../context/TodoContext";
import useTodos from "../hooks/useTodos";
import useTheme from "../hooks/useTheme";


export default function TodoInput() {

    //   const { todos, addTodo, toggleTodo, deleteTodo,editTodo,clearCompleted} = useContext(TodoContext);
    const [text, setText] = useState("");

    const { theme, toggleTheme } = useTheme();

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

            <button className="theme-button"
                type="button"
                onClick={toggleTheme}>
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>

            <div className="container-input">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What needs to be done?"
                />

                <button type="submit">
                    Add Todo
                </button>

            </div>

        </form>
    );
}