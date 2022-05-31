import React, {useContext} from 'react';
import {ToDoContext} from '../ToDoContext';
import './ToDoCounter.css';

const ToDoCounter = () => {

  const { totalTodos, completedTodos } = useContext(ToDoContext);

  return (
    <div className='ToDoCounterTitle'>
      <h1 className='h1Title'>Welcome to your task manager</h1>
      {totalTodos > 0 ? (
        <h2 className='h2Title'>
          You've completed {completedTodos} of {totalTodos} Tasks.
        </h2>
      ) : (
        <h2 className='h2Title'>Add your first task💪</h2>
      )}
    </div>
  );
};

export default ToDoCounter;
