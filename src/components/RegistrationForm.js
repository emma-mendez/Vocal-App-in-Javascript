import React, { useState } from 'react';


function RegistrationForm() {
    const [typedName, setTypedName] = useState("");
    const [typedFN, setTypedFN] = useState("");
    const [typedLN, setTypedLN] = useState("");
    const [typedPassword, setTypedPassword] = useState("");

    return (
      <div>
          <h1>Log In</h1>
        <input
          placeholder="Choose Username"
          value={typedName}
          onChange={(event) => {
            setTypedName(event.target.value);
          }}
        />
        <input 
        placeholder="First Name" 
        value={typedFN} 
        onChange={(event) => {
          setTypedFN(event.target.value);
        }}/>
         <input 
        placeholder="Last Name" 
        value={typedLN} 
        onChange={(event) => {
          setTypedLN(event.target.value);
        }}/> <input 
        placeholder="Choose Password" 
        value={typedPassword} 
        onChange={(event) => {
            setTypedPassword(event.target.value);
        }}/>
      </div>
    );
  }
  
    export default RegistrationForm;