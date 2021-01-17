import './modal.css';
import React from "react";
import Form from '../Submit';
import Submit from '../Submit';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const showHideRegistration = show ? "modal display-block" : "modal display-none";


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

  const handleRegister =async () => {
    const response = await fetch('http://localhost:1000/signup', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        userName: 'Harjeet',
        password: 'GirrrllllL!!'
      })
    })
    const json = await response.json()
    window.alert(json.message)
  console.log("Good to GO Emma!")
  }


  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button class="buttonf" type="button" onClick={handleClose}>
          Close
        </button>
          <button class="buttonf" type="button" onClick={ ""}>
            <Submit>
            <button onClick={handleRegister}>Register</button>
            </Submit>
          {/* <Button href="/home">Log In</Button> */}
        </button>
      </section>
    </div>
  );

};




export default Modal;

