import React, { useState } from 'react';


function Form() {
    const [typedName, setTypedName] = useState("");
    const [typedPassword, setTypedPassword] = useState("");
  
    return (
      <div>
          <h1>Log In</h1>
        <input
          class="form"
          placeholder="Username"
          value={typedName}
          onChange={(event) => {
            setTypedName(event.target.value);
          }}
        />
        <input 
        class="form"
        placeholder="Password" 
        value={typedPassword} 
        onChange={(event) => {
            setTypedPassword(event.target.value);
        }}/>
      </div>
    );
  }
  
    export default Form;
