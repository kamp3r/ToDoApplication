import React from 'react';
import { HiBadgeCheck, HiTrash } from 'react-icons/hi';

import './ToDoItem.css';

const ToDoItem = (props) => {

  return (
    <li className='ToDoItem'>
      <span className={`iconCheck ${props.completed && 'iconCheckcompleted'} `}>
        <HiBadgeCheck onClick={props.onComplete} />
      </span>
      <p className={`task ${props.completed && 'taskCompleted'}`}>
        {props.text}
      </p>
      <div className='containerIcons'>
        <span className='iconCancel'>
          <HiTrash onClick={props.onDelete} />
        </span>
      </div>
    </li>
  );
};

export default ToDoItem;
