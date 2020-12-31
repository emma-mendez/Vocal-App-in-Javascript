import React, { useState }from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/dashboard.js';



function App() {

  const handleClickOnExample2 = async () => {
    const response = await fetch('http://localhost:1000/example-two')
    const json = await response.json()
    window.alert(json.message)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src='acslogo.png' className="App-logo" alt="logo" />
      </header>
      <Dashboard/>
      <br></br>
      {/* <input placeholder='greeting' value={typedGreeting} onChange={(e) => setTypedGreeting(e.target.value)}></input>
      <br />
      <input placeholder='Name'></input>
      <br></br>
      <input placeholder='Email'></input>
      <br></br>
      <input placeholder='Password'></input>
      < br></br> */}
</div>

  );
}


export default App;