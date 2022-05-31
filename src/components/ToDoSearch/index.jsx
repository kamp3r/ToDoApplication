import React, { useContext } from 'react';
import { ToDoContext } from '../ToDoContext';
import { AiOutlineSearch } from 'react-icons/ai';
import './ToDoSearch.css';

const ToDoSearch = () => {
  const { searchValue, setSearchValue } = useContext(ToDoContext);

  const onSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='SearchContainer'>
      <input
        className='ToDoSearch'
        onChange={onSearch}
        value={searchValue}
        name='search'
        id='search'
        placeholder='Busca tu tarea'
      />
      <label htmlFor='search'>
        <AiOutlineSearch className='aiOut' />
      </label>
    </div>
  );
};

export default ToDoSearch;
