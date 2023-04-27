import React, { Component } from 'react';
import './App.css';
import 'animate.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isInputValid: false
    };
  }
  
  handleChange = (event) => {
    const input = event.target.value;
    const isValid = input.length >= 60;
    this.setState({ text: input, isInputValid: isValid });
  }
  
  renderText = () => {
    return <p>{this.state.text}</p>;
  }
  
  handleSubmit = () => {
    alert(`Article de blog soumis avec succès : "${this.state.text}" (Nombre de caractères : ${this.state.text.length})`);
  }
  
  render() {
    let message = '';
    let messageClass = '';
    if (this.state.text.length < 60) {
      message = 'Votre message doit comporter au moins 60 caractères.';
    } else {
      message = 'Votre message a au moins 60 caractères, il peut être envoyé.';
      messageClass = 'green';
    }
    return (
      <div className="App">
        <div className="header">Editeur d'article de blog - 
        <span className="name yellow">&nbsp;Ryan, Antoine, Richard</span>
        </div>
        <div className={`alert ${messageClass}${this.state.text.length < 60 ? '' : ' animate__bounceIn'}`}>{message}</div>
        <textarea className="textarea" value={this.state.text} onChange={this.handleChange} placeholder="Entrez votre message ici s'il vous plait..." />
        <div className="counter">Nombre de caractères : {this.state.text.length}/1000 caractères</div>
        <div className="submit">
          <button disabled={!this.state.isInputValid} onClick={this.handleSubmit}>Envoyer</button>
        </div>
      </div>
    );
  }
}

export default App;
