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

    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showModalLogin = this.showModalLogin.bind(this);
    this.hideModalLogin = this.hideModalLogin.bind(this);
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

  

    render() {
        return (   
          <> 
          <Modal show={this.state.showLogin} handleClose={this.hideModalLogin}>
          <Form />
          </Modal>
          <div>  
          <button 
          class="text-box" 
          type="button" 
          class="button"
          onClick={this.showModalLogin}>
              Log In
          </button>
              </div>
              <br></br>
              <div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
        <RegistrationForm />
        </Modal>
              <button 
              class="text-box" 
              type="button" 
              class="button" 
              onClick={this.showModal}>
              Register
            </button>
            </div>        
            </>

            
            );
      }


}

export default Dashboard 

