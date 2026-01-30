
function TodoForm({ addTodo }) {
  const submitHandler = (e) => {
    e.preventDefault();
    const value = e.target.elements[0].value;
    if (!value.trim()) return;
    addTodo(value);
    e.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="todo-input standard-input"
        placeholder="Add a task."
      />
      <button className="standard-button">I Got This!</button>
    </form>
  );
}

export default TodoForm;
