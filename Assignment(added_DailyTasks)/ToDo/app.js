function TodoApp() {
    const [todos, setTodos] = React.useState([]);
    const [newTodo, setNewTodo] = React.useState("");
  
    const addTodo = (e) => {
      e.preventDefault();
      if (newTodo.trim()) {
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo("");
      }
    };
  
    const toggleTodo = (index) => {
      const updatedTodos = todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    };
  
    const deleteTodo = (index) => {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    };
  
    return (
      <div className="todo-container">
        <h1>TO-DO List</h1>
        <form onSubmit={addTodo} id="todo-form">
          <input
            type="text"
            id="todo-input"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
          />
          <button type="submit">Add</button>
        </form>
  
        <ul id="todo-list">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`todo-item ${todo.completed ? "completed" : "not-completed"}`}
            >
              <span>{todo.text}</span>
              <div className="todo-actions">
                <button onClick={() => toggleTodo(index)} className="toggle-btn">
                  {todo.completed ? "Mark Incomplete" : "Mark Complete"}
                </button>
                <button onClick={() => deleteTodo(index)} className="delete-btn">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  ReactDOM.render(<TodoApp />, document.getElementById("root"));
  