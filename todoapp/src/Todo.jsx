import React, { useState } from "react";
import './Todo.css'

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(false);
  const [editMode, setEditMode] = useState(null);
  const [editValue, setEditValue] = useState(false);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };
  
  const deteleTodo = (id) => {
    const updatedTodos = todos.filter
    ((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const enterEditMode= (id, text)=>{
    setEditMode(true);
    setEditId(id);
    setEditValue(text);
  };
  const updateTodo = () =>{
    const updetedTodos = todos.map((todo)=>{
        if(todo.id=== editId){
            return{...todo, text:editValue}
        }
        return todo;
    });
    setTodos(updetedTodos);
    setEditMode(false);
    setEditId(null);
    setEditValue('');
  }

  return (
    <div className="todo-container">
      <h2>ToDo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {
        editMode ? (
            <div>
                <input type="text" value={editValue}
                onChange={(e)=>setEditValue
                    (e.target.value)
                }/>
                <button onClick={updateTodo}>Update</button>
            </div>
        ):(
            <button onClick={addTodo}>Add</button>
        )
      }
      
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deteleTodo(todo.id)}>Delete</button>
            <button onClick={() => enterEditMode(todo.id, todo.text)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
