import React, { useEffect }from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  const handleServerFetch = async () => {
    const serverResponse = await fetch('http://localhost:1000/welcome-message')
    const data = await serverResponse.json()
    console.log(data)
    window.alert(data.message)
  }


  return (
    <div className="App">
      <button onClick={handleServerFetch}>Get my message from my server</button>
      <header className="App-header">
        <img src='acslogo.png' className="App-logo" alt="logo" />
      </header>
      <h1>You don't normally click on headers</h1>
      <Server_Button/>
    </div>
  );
}

function Server_Button() {

  const myFunction = () => window.alert('defined this elsewhere!±')

  return (
    <>
    <button style={{ backgroundColor: 'orange', margin: 10, alignContent: 'center'}}
    onClick={() => window.alert('Defined this inline')}>Log In</button>
    
    <button style={{ backgroundColor: 'lightblue'}}
      onClick={myFunction}
    >Sign Up</button>
    </>
  )
}

// function sayHello() {
//   return "MAgic beans from the market"
// }




export default App;