import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Form() {
  const [show, setShow] = useState(true)
  const {register, handleSubmit} = useForm();
  const [inputUserName, setUserName] = useState("");
  const [inputUserPassword, setUserPassword] = useState("");
  
  let history = useHistory();
  
  const redirect = () => {
    history.push('/AKJBDABDKJbjbkjbndbfiuesfy783463945783648234iyurwhffbjdvcaca~DSErq6t87ywiau')
  }

  const onSubmit = async () => {
    const response = await fetch('https://fierce-peak-48968.herokuapp.com/login', {
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

  
  if (json.message === 'user exists!') {
    window.alert( "Welcome To ACS Vocal App. Accessing Servers ..." )
    redirect()
  } else {
     window.alert ("No User Identified. Please Register or retry with new details.") 
    }  
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
        <button 
        type="submit"
        class="buttonf" 
        >Submit
        </button>
        <button 
        type="submit"
        class="buttonf" 
        className='buttonf'><a href="/" className='blacktextbutton'>Close</a>
				</button>       
        </form>

       
      </div>
    );
  }

    export default Form;
