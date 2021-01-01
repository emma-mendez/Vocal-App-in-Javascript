import React, { Component } from "react";
import Modal from '../modal/modal.js';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModalLogin = this.showModalLogin.bind(this);
    this.hideModalLogin = this.hideModalLogin.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    
  }

  showModalLogin = () => {
    this.setState({ showLogin: true });
  };

  hideModalLogin = () => {
    this.setState({ showLogin: false });
  };


  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  

    render() {
        return (
          <main>
              <Modal show={this.state.showLogin} handleClose={this.hideModalLogin}>
          <h1>Log In</h1>
    <form  action="/login" method="POST">
    <div>
        <label class="label" for="email">Email</label>
        <input class="text-box" type="email" id="email" name="email"
        required/>
    </div>
    <div>
        <label class="label" for="password">Password</label>
        <input class="text-box" class="text-box" type="password" id="password" name="password"
        required/>
    </div>
    </form>
        </Modal>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h1>Register</h1>
    <form class="text" action="/register" method="POST">
    <div>
        <label class="label" for="name">Choose UserName</label>
        <input class="text-box" type="text" id="name" name="name"
        required/>
    </div>
    <div>
        <label class="label" for="name">Name</label>
        <input class="text-box" type="text" id="name" name="name"
        required/>
    </div>
    <div>
        <label class="label" for="email">Email</label>
        <input class="text-box" type="email" id="email" name="email"
        required/>
    </div>
    <div>
        <label class="label" for="password">Password</label>
        <input class="text-box" type="password" id="password" name="password"
        required/>
    </div>
    </form>
        </Modal>
            <button class="text-box" type="button" class="button" onClick={this.showModalLogin}>
              Log In
              </button>
              <br></br>
              <button class="text-box" type="button" class="button" onClick={this.showModal}>
              Register
            </button>
          </main>
        );
      }


}

export default Dashboard 

// class="modal-text"

      {/* <button onClick={async () => {
        const response = await fetch('http://localhost:1000/signup')
        const json = await response.json()
        window.alert(json.message)}}>Sign up</button> */}


      {/* <button onClick={async () => {
        const response = await fetch('http://localhost:1000/example-one', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content class="text-box" Type': 'application/json'
          },
          body: JSON.stringify({
            greeting: class="text-box" typedGreeting
          })
        })
        const json = await response.json()
        window.alert(json.message)
      }}>Example 1</button>
      <button onClick={handleClickOnExample2}>Example 2</button> */}



// function Server_Button() {

//   const logInData = async () => {
//     const serverResponse = await fetch('http://localhost:1000//signup')
//     const data = await serverResponse.json()
//     // window.alert(data.message)
//     if (data.areYouLoggedIn === true) {
//       window.alert("You are logged in!")
//     } else {
//       window.alert("You are not logged in!")
//     }
//   }

//   const signUpData = async () => {
//     const serverResponse = await fetch('http://localhost:1000/register')
//     const data = await serverResponse.json()
//     console.log(data.status)
//     window.alert(data.message)
//   }

//   return (
//     <>
//     <button style={{ backgroundColor: 'orange', margin: 10, alignContent: 'center'}}
//     onClick={logInData}>Log In</button>
    
//     <button style={{ backgroundColor: 'lightblue'}}
//       onClick={signUpData}
//     >Sign Up</button>
//     </>
//   )
// }
