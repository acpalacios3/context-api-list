import { createContext, useState } from "react";

// create Context
export const TodoContext = createContext();

// create Provider
export function TodoProvider({ children }) {
    //    todos is array items and setTodos is function
      const [todos, setTodos] = useState([]);


//  function that adds items to the new array
  const addTodo = (text) => {

        const newTodo = {
            id: todos.length > 0
            ? todos[todos.length - 1].id + 1
            : 1,
            text: text,
            completed: false
  };

  
  setTodos(prevTodos => [...prevTodos, newTodo]);
  console.log("newTodo",newTodo);
}; 

return (
  <TodoContext.Provider value={{todos, addTodo}}>
    {children}
  </TodoContext.Provider>
);

}
  