import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='acslogo.png' className="App-logo" alt="logo" />
      </header>
      <h1>VOCAL TRAINER</h1>
      <button
        style={{ color: 'red', backgroundColor: 'black' }}
      onClick={() => window.alert ('You clicked me')}>Press me</button>
      <Avocado />
    </div>
  );
}

function Avocado() {
  return (
    <>
    <button style={{ backgroundColor: 'orange', marginRight: 50 }}
    onClick={() => window.alert ('Ummmmmmmmmm')}>Yummy!</button>
    <button
      onClick={() => window.alert("Goodbye!")}
    >Sign Up</button>
    </>
  )
}

// function sayHello() {
//   return "MAgic beans from the market"
// }




export default App;
