import React, { Component } from "react";
import Modal from '../modal/modal.js';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      email: '',
      password: ''
    };
    this.showModalLogin = this.showModalLogin.bind(this);
    this.hideModalLogin = this.hideModalLogin.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    
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

  onSubmitLogin = (data) => {
    console.log('Submit data: ', data);
    console.log(this.state.email);
    console.log(this.state.password);
    this.handleLogin();
  };

  onSubmitRegister = (data) => {
   //need to write this
  };

  onEmailChange = (event) => {
      this.setState({
          email: event.target.value
      });
  }

    onPasswordChange = (event) => {
      this.setState({
          password: event.target.value
      });
  }

  handleLogin =async () => {
    // const response = await fetch('http://localhost:1000/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Accept' : 'application/json',
    //     'Content-Type' : 'application/json'
    //   },
    //   body: JSON.stringify({
    //     userName: this.state.email,
    //     password: this.state.password
    //   })
    // })
    // const json = await response.json()
    // window.alert(json.message)
  console.log("Good to GO Emma!")

  }



    render() {
        return (
          <main>
              <Modal show={this.state.showLogin}>
                <h1>Log In</h1>
                <form action="\studio" onSubmit={this.onSubmitLogin}>
                    <div>
                        <label class="label" for="email">Email</label>
                        <input class="text-box" type="email" id="email" name="email" value={this.state.email} onChange={this.onEmailChange}
                        required/>
                    </div>
                    <div>
                        <label class="label" for="password">Password</label>
                        <input class="text-box" class="text-box" type="password" id="password" name="password" value={this.state.password} onChange={this.onPasswordChange}
                        required/>
                    </div>
                    <button className="buttonf" type="button" onClick={this.hideModalLogin}>
                        Close
                    </button>
                    <button className="buttonf" type="submit">
                        Login
                    </button>
                </form>
        </Modal>
        <Modal show={this.state.show}>
          <h1>Register</h1>
    <form onSubmit={this.onSubmitRegister}>
    <div>
        <label class="label" for="name">Choose UserName</label>
        <input class="text-box" type="text" id="name" name="name" value={this.state.cname}
        required/>
    </div>
    <div>
        <label class="label" for="name">Name</label>
        <input class="text-box" type="text" id="name" name="name" value={this.state.name}
        required/>
    </div>
    <div>
        <label class="label" for="email">Email</label>
        <input class="text-box" type="email" id="email" name="email" value={this.state.email}
        required/>
    </div>
    <div>
        <label class="label" for="password">Password</label>
        <input class="text-box" type="password" id="password" name="password" value={this.state.password}
        required/>
    </div>
       <button className="buttonf" type="button" onClick={this.hideModalLogin}>
                        Close
       </button>
        <button className="buttonf" type="submit">
                        Register
        </button>
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

