import React, { useContext, useState } from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoForm.css';

const ToDoForm = () => {
  const [newValue, setNewValue] = useState('');

  const { addTodo, setOpenModal } = useContext(ToDoContext);


  const onWrite = (e) => {
    setNewValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newValue === '') {
      return false;
    } else {
      addTodo(newValue);
      setOpenModal(false);
    }
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <form className='ToDoForm' onSubmit={onSubmit}>
      <label htmlFor='task'>Task</label>
      <textarea onChange={onWrite} type='text' id='task' />
      <div className='ToDoFormButtons'>
        <button className='FormButtonAdd' type='submit'>Add</button>
        <button className='FormButtonCancel' type='button' onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
