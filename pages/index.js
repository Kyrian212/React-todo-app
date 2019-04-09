import React, { useState } from "react";


function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
      <script jsx>{'.todo {background: #fff;box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);padding: 3px 10px; font-size: 12px;margin-bottom: 6px;  border-radius: 3px; display: flex; align-items: center;justify-content: space-between;}'}</script>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  <script jsx>{'.todo-list { background: #e8e8e8; border-radius: 4px; padding: 5px; max-width: 400px;}'}</script>

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)}
      />
      <style jsx>{' .input {width: 50%;box-sizing: border-box; border: 0;  border-radius: 4px; box-shadow: none;  padding: 1rem; height: 2.25em;}'}</style>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
          
      </div>

      <style jsx>{'.app { background: #209cee; padding: 30px; height: 100vh;}}'}
      </style>
    </div>
  );
}

export default App;