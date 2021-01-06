import './modal.css';
import React from "react";
import {Button} from "react-bootstrap";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";


  const submitButton =async () => {
    const response = await fetch('http://localhost:1000/example-one', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        user: 'details'
      })
    })
    
    const json = await response.json()
    window.alert(json.message)
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button class="buttonf" type="button" onClick={handleClose}>
          Close
        </button>
          <button class="buttonf" type="button" onClick={ ""}>
          <Button href="/home">Submit</Button>
        </button>
      </section>
    </div>
  );
};

export default Modal;