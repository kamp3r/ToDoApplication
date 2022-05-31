import React, { createContext, useState } from 'react';
import useLocalStorage from './useLocalStorage';

const ToDoContext = createContext();

const ToDoProvider = (props) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState('');

  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const toDoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    let id = 1;
    const newTodos = [...todos];
    if (todos.length > 0) {
      id = todos[todos.length - 1].id + 1;
    }
    newTodos.push({
      id,
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };


  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: !todos[todoIndex].completed,
    };
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };


  return (
    <ToDoContext.Provider
      value={{
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        addTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export { ToDoProvider, ToDoContext };
