import ReactDom from 'react-dom'
import './Modal.css'

const Modal = ({ children }) => {
  return ReactDom.createPortal(
    <div className='modalBackground'>
    {children}
    </div>,
    document.getElementById('modal')
  )
}

export default Modal