function TodoList({ todos, deleteTodo, toggleTodo }) {

  const handleDelete = (e, index) => {
    const todoElement = e.target.closest(".todo");

    // 1️⃣ trigger stone-drop animation
    todoElement.classList.add("fall");

    // 2️⃣ wait for animation, then delete from state
    setTimeout(() => {
      deleteTodo(index);
    }, 500); // MUST match CSS transition time
  };

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li
          key={index}
          className={`todo standard-todo ${
            todo.completed ? "completed" : ""
          }`}
        >
          <span>{todo.text}</span>

          <div className="actions">
            <button
              className="check-btn"
              onClick={() => toggleTodo(index)}
            >
              <i className="fas fa-check"></i>
            </button>

            <button
              className="delete-btn"
              onClick={(e) => handleDelete(e, index)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
