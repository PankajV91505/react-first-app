import React, { useState, useEffect } from 'react';
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';

const App = () => {
  const LOCAL_STORAGE_KEY = 'todoList';  

  const [todoItems, setTodoItems] = useState([]);

 
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodoItems(storedTodos);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoItems));
  }, [todoItems]);

  const handleAddButton = (todoName) => {
    const currentTime = new Date();
    const formattedDate = currentTime.toLocaleDateString();
    const newTodo = { name: todoName, date: formattedDate };
    setTodoItems([...todoItems, newTodo]);
  };


  const handleDeleteButton = (index) => {
    const updatedTodos = todoItems.filter((_, i) => i !== index);
    setTodoItems(updatedTodos);
  };

  return (
    <center className='todo-container'>
      <AppName />
      <AddTodo onAdd={handleAddButton} />
      <TodoItems todoItems={todoItems} onDelete={handleDeleteButton} />
    </center>
  );
};

export default App;
