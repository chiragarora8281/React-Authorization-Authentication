import React, { useContext } from 'react'
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { ModalContextApi } from '../../context/ModalContext';

const Modal = ({children}) => {
    let {toggle , handleToggle} = useContext(ModalContextApi);
    return ReactDOM.createPortal(

    <>
    <section className={styles.modalContainer}>
        <div>
        <button onClick={handleToggle}>{toggle ? "X": "open"}</button>
        </div>
  
        {toggle ? children: ""}
        </section>
    </>, 
    document.getElementById('modal')
  )
}

export default Modal