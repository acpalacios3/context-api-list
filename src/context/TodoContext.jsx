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


// function change the status of an item
const toggleTodo = (id) => {

  setTodos(prevTodos => prevTodos.map(todo => {

      if (todo.id === id) {
        return {...todo,
          completed: !todo.completed
        };
      }

      return todo;
    })
  );
  console.log("toggleTodo:", id);
  console.log("toggleTodo",todos);
};


// function delete an item from todo
  const deleteTodo = (id) => {

    setTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== id)
    );
    console.log("deleteTodo",todos);
  };

// function edit item 
  const editTodo = (id, newText) => {

  setTodos(prevTodos => prevTodos.map(todo => {
            if (todo.id === id) {
                return {
                ...todo,
                text: newText
                };
            }

      return todo;
    })
  );
   console.log("editTodo",todos);

};




return (
  <TodoContext.Provider value={{todos, addTodo, toggleTodo, deleteTodo,editTodo}}>
    {children}
  </TodoContext.Provider>
);

}
  