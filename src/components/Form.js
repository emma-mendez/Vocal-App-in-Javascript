import React, { useState } from 'react';
import {useForm} from "react-hook-form";

function Form() {

    const {register, handleSubmit} = useForm();

    const onSubmit = data => console.log(data);


    return (
      <div>
          <h1>Log In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
        <input
          class="form"
          ref={register}
          name="username"
          placeholder="Username"
        />
        <input 
        class="form"
        ref={register}
        name="password"
        type="password"
        placeholder="Password" 
        />
        <br/>
        <button class="buttonf">Submit</button>
        </form>
      </div>

    );
  }
  
    export default Form;
