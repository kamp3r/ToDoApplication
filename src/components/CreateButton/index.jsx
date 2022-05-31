import React, {useContext} from 'react';
import { ToDoContext } from '../ToDoContext';
import { FaPlus } from 'react-icons/fa';
import './CreateButton.css';

const CreateButton = () => {
  const { openModal, setOpenModal } = useContext(ToDoContext)
  
  const modalButton = ()=>{
    setOpenModal(!openModal)
  }

  return (
    <button onClick={modalButton} className='CreateButton'><FaPlus/></button>
  )
}

export default CreateButton