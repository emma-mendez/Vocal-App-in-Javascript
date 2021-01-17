import React, { useState } from 'react';


function RegistrationForm() {
    const [typedName, setTypedName] = useState("");
    const [typedFN, setTypedFN] = useState("");
    const [typedLN, setTypedLN] = useState("");
    const [typedPassword, setTypedPassword] = useState("");

    return (
      <div>
          <h1>Register</h1>
        <input
        class="form"
          placeholder="Choose Username"
          value={typedName}
          onChange={(event) => {
            setTypedName(event.target.value);
          }}
        /> 
        <br></br>
        <input 
        class="form"
        placeholder="First Name" 
        value={typedFN} 
        onChange={(event) => {
          setTypedFN(event.target.value);
        }}/>
        <br></br>
         <input 
        class="form"
        placeholder="Last Name" 
        value={typedLN} 
        onChange={(event) => {
          setTypedLN(event.target.value);
        }}/> 
        <br></br>
        <input 
        class="form"
        placeholder="Choose Password" 
        value={typedPassword} 
        onChange={(event) => {
            setTypedPassword(event.target.value);
        }}/>
      </div>
    );
  }
  
    export default RegistrationForm;