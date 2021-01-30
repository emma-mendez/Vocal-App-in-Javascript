import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";


function Form() {

  const {register, handleSubmit} = useForm();
  const [inputUserName, setUserName] = useState("");
  const [inputUserPassword, setUserPassword] = useState("");
  
  let history = useHistory();
  
  const redirect = () => {
    history.push('/Home')}

  const onSubmit = async () => {
    const response = await fetch('http://localhost:1000/login', {
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
  redirect()  
  }
    
    return ( 
      <div>
          <h1>Log In</h1>
          <form action="\home" onSubmit={handleSubmit(onSubmit)}>
        <input
        onChange={(e) => setUserName(e.target.value)}
          class="form"
          ref={register}
          name="username"
          placeholder="Username"
          value={inputUserName}
        />
        <br></br>
        <input 
        onChange={(e) => setUserPassword(e.target.value)}
        class="form"
        ref={register}
        name="password"
        type="password"
        placeholder="Password" 
        value={inputUserPassword}

        />
        <br/>
        <button 
        type="submit"
        class="buttonf" 
        >Submit
        </button>
        </form>
      </div>
    );
  }
  
    export default Form;
