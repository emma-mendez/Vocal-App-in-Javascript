import React, { useState } from 'react';
import {useForm} from "react-hook-form";
// import { BrowserRouter as Router, Switch, Route, Link, Prompt} from "react-router-dom";


function RegistrationForm({ handleClose }) {
    
    const {register, handleSubmit} = useForm();
    const [inputChooseName, setChooseName] = useState("");
    const [inputFirstName, setFirstName] = useState("");
    const [inputLastName, setLastName] = useState("");
    const [inputUserPassword, setUserPassword] = useState("");
      
      const onSubmit = async () => { 
        const response = await fetch('http://localhost:1000/signup', {
          method: 'POST',
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            chooseUsername: inputChooseName,
            FirstName: inputFirstName,
            LastName: inputLastName,
            password: inputUserPassword
          })
        })
        const json = await response.json()
        window.alert(json.message)
        console.log(inputFirstName)
        console.log(inputLastName)
  
      console.log("Good to GO Emma!")
      handleClose()
    }


    return (
      <div>
          <h1>Register</h1>
          <form action="\home" onSubmit={handleSubmit(onSubmit)}>

        <input
        onChange={(e) => setChooseName(e.target.value)}
        value={inputChooseName}
        class="form"
        ref={register}
          name="username"
          placeholder="Choose Username"
          value={inputChooseName}
        /> 
        <br></br>
        <input 
        onChange={(e) => setFirstName(e.target.value)}
        value={inputFirstName}
        class="form"
        ref={register}
        name="firstname"
        placeholder="First Name"
        value={inputFirstName}/>
        <br></br>
        <input 
        onChange={(e) => setLastName(e.target.value)}
        value={inputLastName}
        class="form"
        ref={register}
        name="lastname"
        placeholder="Last Name"
        value={inputLastName}/>
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
        </form>
      </div>

    );
  }
  
    export default RegistrationForm;