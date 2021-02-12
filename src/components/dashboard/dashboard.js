import React, { Component } from "react";
import Form from "../Form.js";
import Modal from '../modal/modal.js';
import RegistrationForm from "../RegistrationForm.js";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      showLogin: false,
      showRegistration: false,

    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showModalLogin = this.showModalLogin.bind(this);
    this.hideModalLogin = this.hideModalLogin.bind(this);
    this.showModalRegistration = this.showModalRegistration.bind(this);
    this.hideModalRegistration = this.hideModalRegistration.bind(this);
  
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  showModalLogin = () => {
    this.setState({ showLogin: true });
  };

  hideModalLogin = () => {
    this.setState({ showLogin: false });
  };

  showModalRegistration = () => {
    this.setState({ showRegistration: true });
  };

  hideModalRegistration = () => {
    this.setState({ showRegistration: false });
  };


    render() {

        return (   
          <> 
          <Modal show={this.state.showLogin}>
          <Form handleClose={this.hideModalLogin}/>
          </Modal>
          <div>  
          <button 
          type="button" 
          class="buttonf"
          onClick={this.showModalLogin}>
              Log In
          </button>
              </div>
              <br></br>
        <Modal show={this.state.showRegistration}>
        <RegistrationForm handleClose={this.hideModalRegistration}/>
        </Modal>
              <div>
              <button 
              type="button" 
              class="buttonf" 
              onClick={this.showModalRegistration}>
              Register
            </button>
            </div>        
            </>
            );
      }


}

export default Dashboard 

