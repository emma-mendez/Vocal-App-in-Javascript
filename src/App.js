import React, { useEffect }from 'react';
import logo from './logo.svg';
import './App.css';



function App() {




  return (
    <div className="App">
      <header className="App-header">
        <img src='acslogo.png' className="App-logo" alt="logo" />
      </header>
      <Server_Button/>
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
    <button style={{ backgroundColor: 'orange', margin: 10, alignContent: 'center'}}
    onClick={logInData}>Log In</button>
    
    <button style={{ backgroundColor: 'lightblue'}}
      onClick={signUpData}
    >Sign Up</button>
    </>
  )
}


export default App;