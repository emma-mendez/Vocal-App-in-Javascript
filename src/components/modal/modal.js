import './modal.css';
import React from "react";
import Form from '../Submit';
import Submit from '../Submit';

const Modal = ({ 
  
handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const showHideRegistration = show ? "modal display-block" : "modal display-none";


  return (
    <div className={showHideClassName}>
      <section className="modal-main">
         {/* <button type="button" 
         className="close" 
         aria-label="Close" 
         onClick={handleClose}>
          <span aria-hidden="true">&times;</span>
        </button> */}
        {children}
      </section>
    </div>
  );

};




export default Modal;

