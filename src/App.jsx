
import './App.css'
import TodoInput from "./components/TodoInput";
import TodoList from './components/TodoList';
import useTheme from './hooks/useTheme';

function App() {

  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "app dark" : "app light"}>
      <p className="app-title">Todo App (Context API)</p>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App
