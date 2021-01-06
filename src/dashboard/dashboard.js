import React, { Component } from "react";
import Modal from '../components/modal/Modal.js';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

    render() {
        return (
          <main>
            <h1>Start Now</h1>
              <Modal show={this.state.show} handleClose={this.hideModal}>
          <h1>Register</h1>
    <form action="/register" method="POST">
    <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name"
        required/>
    </div>
    <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email"
        required/>
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password"
        required/>
    </div>
    </form>
        </Modal>
            <button type="button" onClick={this.showModal}>
              Log In
            </button>
              <button type="button" onClick={this.showModal}>
              Sign Up
            </button>
          </main>
        );
      }


}

export default Dashboard 