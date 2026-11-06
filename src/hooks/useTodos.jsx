import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function useTodos() {

    const context = useContext(TodoContext);

    return context;

}


