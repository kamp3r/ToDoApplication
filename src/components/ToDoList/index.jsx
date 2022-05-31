import React from 'react'
import './ToDoList.css'

const ToDoList = (props) => {
  return (
    <section>
        <ul className='ToDoList'>
            {props.children}
        </ul>
    </section>
  )
}

export default ToDoList