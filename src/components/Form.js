import React, { useState } from 'react';
import {useForm} from "react-hook-form";

function Form({ handleClose }) {

  const {register, handleSubmit} = useForm();
  const [inputUserName, setUserName] = useState("");
  const [inputUserPassword, setUserPassword] = useState("");
    
    const onSubmit = async () => {
      const response = await fetch('http://localhost:1000/signup', {
        method: 'POST',
        headers: {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          userName: inputUserName,
          password: inputUserPassword
        })
      })
      const json = await response.json()
      window.alert(json.message)
      console.log(inputUserName)
      console.log(inputUserPassword)

    console.log("Good to GO Emma!")
    handleClose()
    }

    
    return (
      <div>
          <h1>Log In</h1>
          <form action="\home" onSubmit={handleSubmit(onSubmit)}>
          
        <input
        onChange={(e) => setUserName(e.target.value)}
          value={inputUserName}
          class="form"
          ref={register}
          name="username"
          placeholder="Username"
          value={inputUserName}
        />
        <input 
        onChange={(e) => setUserPassword(e.target.value)}
        value={inputUserPassword}
        class="form"
        ref={register}
        name="password"
        type="password"
        placeholder="Password" 
        />
        <br/>
        <button 
        type="submit"
        class="buttonf" 
        >Submit</button>
        </form>
      </div>

    );
  }
  
    export default Form;
