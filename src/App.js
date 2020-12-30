import React, { useEffect }from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard.js';


function App() {




  return (
    <div className="App">
      <header className="App-header">
        <img src='acslogo.png' className="App-logo" alt="logo" />
      </header>
      <Server_Button/>
      <Dashboard/>
      <br></br>
    </div>
  );
}

function Server_Button() {

  const logInData = async () => {
    const serverResponse = await fetch('http://localhost:1000/logIn')
    const data = await serverResponse.json()
    console.log(data.status)
    window.alert(data.message)
  }

  const signUpData = async () => {
    const serverResponse = await fetch('http://localhost:1000/signUp')
    const data = await serverResponse.json()
    console.log(data.status)
    window.alert(data.message)
  }

  return (
    <>
    </>
  )
}


export default App;