import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [todoName, setTodoName] = useState('');

  const handleAddClick = () => {
    if (todoName.trim() === '') return;
    onAdd(todoName);
    setTodoName('');
  };

  return (
    <div className="add-todo">
      <input 
        type="text" 
        placeholder="Enter Todo Here" 
        value={todoName} 
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button onClick={handleAddClick} className="btn btn-success m-2">Add</button>
    </div>
  );
};

export default AddTodo;
