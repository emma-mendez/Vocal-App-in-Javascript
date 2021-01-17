import React, { useState } from 'react';


function Form() {
    const [typedName, setTypedName] = useState("");
    const [typedPassword, setTypedPassword] = useState("");
  
    return (
      <div>
          <h1>Log In</h1>
        <input
          placeholder="Username"
          value={typedName}
          onChange={(event) => {
            setTypedName(event.target.value);
          }}
        />
        <input 
        placeholder="Password" 
        value={typedPassword} 
        onChange={(event) => {
            setTypedPassword(event.target.value);
        }}/>
      </div>
    );
  }
  
    export default Form;
