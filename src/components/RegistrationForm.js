import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import {useForm} from "react-hook-form";
// import { BrowserRouter as Router, Switch, Route, Link, Prompt} from "react-router-dom";


function RegistrationForm({ handleClose }) {
    
    const {register, handleSubmit} = useForm();
    const [inputUserName, setUserName] = useState("");
    const [inputFirstName, setFirstName] = useState("");
    const [inputLastName, setLastName] = useState("");
    const [inputUserPassword, setUserPassword] = useState("");
      
      const onSubmit = async () => { 
          if(inputUserName.length > 2) {
          const response = await fetch('https://fierce-peak-48968.herokuapp.com/signup', {
            method: 'POST',
            headers: {
              'Accept' : 'application/json',
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
              userName: inputUserName,
              firstName: inputFirstName,
              lastName: inputLastName,
              password: inputUserPassword
            }),
  
          })
          const json = await response.json()
          window.alert(json.message)
          console.log(inputFirstName)
          console.log(inputLastName)
  
          } else { 
            window.alert ("No Data")

          }

        
      console.log("Good to GO Emma!")
      handleClose()
    }


    return (
      <div>
          <h1>Register</h1>
          <form action="\home" onSubmit={handleSubmit(onSubmit)}>

        <input
        onChange={(e) => setUserName(e.target.value)}
        value={inputUserName}
        class="form"
        ref={register}
          name="username"
          placeholder="Choose Username"
        /> 
        <br></br>
        <input 
        onChange={(e) => setFirstName(e.target.value)}
        value={inputFirstName}
        class="form"
        ref={register}
        name="firstname"
        placeholder="First Name"
        />
        <br></br>
        <input 
        onChange={(e) => setLastName(e.target.value)}
        value={inputLastName}
        class="form"
        ref={register}
        name="lastname"
        placeholder="Last Name"
        />
        <br></br>
        <input 
        onChange={(e) => setUserPassword(e.target.value)}
        value={inputUserPassword}
        class="form"
        ref={register}
        name="password"
        type="password"
        placeholder="Choose New Password" />
        <br/>
        <br></br>
        <button 
        onSubmit={event => {
          event.preventDefault();
          event.target.reset();
        }}
        type="submit"
        class="buttonf" 
        >Submit
      </button>
      <button 
        type="submit"
        class="buttonf" 
        className='buttonf'><a href="/" className='blacktextbutton' >Close</a>
        </button>
        </form>
      </div>

    );
  }
  
    export default RegistrationForm;