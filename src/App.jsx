import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Clock from "./components/Clock";

function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState("standard");

  // apply theme to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const addTodo = (task) => {
    setTodos([...todos, { text: task, completed: false }]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <Header setTheme={setTheme} />
      <Clock />

      <div id="form">
        <TodoForm addTodo={addTodo} theme={theme} />
      </div>

      <div id="myUnOrdList">
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          theme={theme}
        />
      </div>

      {/* Page End GitHub Icon */}
<footer className="page-footer">
  <a
    href="https://github.com/jitendrasinghchouhan3007"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub Profile"
  >
    <i className="fab fa-github"></i>
  </a>
</footer>

    </>
  );
}

export default App;
