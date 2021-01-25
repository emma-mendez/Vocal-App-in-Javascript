import React, { Component } from "react";
import Modal from '../components/modal/Modal.js.js';

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
          <>
          <main>
          </main>
          </>
        );
      }


}

export default Dashboard 