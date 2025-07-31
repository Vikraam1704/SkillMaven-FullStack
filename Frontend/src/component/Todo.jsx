import React, { useState, useEffect } from 'react';
import axios from 'axios'
const API = 'https://skillmaven-fullstack.onrender.com'
const Todo = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchTodo = async()=>{
    const response=await axios.get(`${API}/todos/`)
    setTodos(response.data);
  }

  useEffect(() => {
    fetchTodo();
  }, []);

  const handleAddOrEdit = async (e) => {
    e.preventDefault();
    if(editing){
      await axios.put(`${API}/todos/${editing._id}`,{title})
    }else{
      await axios.post(`${API}/todos/create`,{title})
    }
    setEditing(null);
    setTitle('');
    fetchTodo();
    
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/todos/${id}`)
    fetchTodo();
  };

  const handleToggleStatus = async(todo) => {
    await axios.put(`${API}/todos/${todo._id}`,{
      completed:!todo.completed
    })
    fetchTodo()
  };

  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        value={title}
        placeholder="Enter the task"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddOrEdit}>{editing ? 'Update' : 'Add'}</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => handleToggleStatus(todo)}
              style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              <p>{todo.title}</p>
            </span>
            <button
              onClick={() => {
                setEditing(todo);
                setTitle(todo.title);
              }}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
