import React, { useState, useEffect } from 'react';

const Todo = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    setTodos([]);
  }, []);

  const handleAddOrEdit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    if (editing) {
      setTodos(todos.map(todo =>
        todo.id === editing.id ? { ...todo, task } : todo
      ));
    } else {
      const newTodo = {
        id: Date.now(),
        task,
        status: false
      };
      setTodos([...todos, newTodo]);
    }

    setTask('');
    setEditing(null);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleStatus = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    ));
  };

  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        value={task}
        placeholder="Enter the task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddOrEdit}>{editing ? 'Update' : 'Add'}</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => handleToggleStatus(todo.id)}
              style={{
                cursor: 'pointer',
                textDecoration: todo.status ? 'line-through' : 'none',
              }}
            >
              <p>{todo.task}</p>
            </span>
            <button
              onClick={() => {
                setEditing(todo);
                setTask(todo.task);
              }}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
