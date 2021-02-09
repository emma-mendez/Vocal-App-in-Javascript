import './modal.css';
import React from "react";

const Modal = ({ 
show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
console.log("inside the model right now", show)

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
      </section>
    </div>
  );

};




export default Modal;

