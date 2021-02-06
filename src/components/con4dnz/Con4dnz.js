import React from 'react';
import ReactDOM from "react-dom";


class Con4dnz extends React.Component {
  constructor(props) {
    
    super(props);

    this.state = {
      name: "",
      modalInputName: ""
    };
  }
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    this.setState({ name: this.state.modalInputName });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false
    });
  }
  
  render() {
        return (
            <>
            <div>
              <h1>CONFIDENCE</h1>
              <p>Can't Live Without It!! So Lets Get It!!</p>
                <button 
                class='buttonf'
                onClick={""}>
                How Are You Feeling Today?
                </button>
                <br></br>
                <button class='buttonf'>Whats To Be Achieved today?</button>
                <br></br>
                <button class='buttonf'>What Is The Motive For Today?</button>
                <br></br>
                <button class='buttonf'>How Do You Want To Look Today?</button>
                <br></br>
                <button class='buttonf'>What Will The World Say About Me Today</button>
            </div>
       </>
    );
}}

const rootElement = document.getElementById("root");
ReactDOM.render(<Con4dnz />, rootElement);

export default Con4dnz
