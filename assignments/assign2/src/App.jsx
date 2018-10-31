import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent.jsx';

class App extends Component {
  
  state = { 
    textLength: 0, 

  }
  
  outputLengthHandler = (event) => { 
    let length = event.target.value.length; 
    this.setState({
      textLength: length
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment 2: Creating Dynamic Lists</h1>
        <input 
          type='text'
          onChange={(event) => this.outputLengthHandler(event)}
        />

        <p>The string input length is: {this.state.textLength}</p>

        <ValidationComponent length={this.state.textLength} />

      </div>
    );
  }
}

export default App;
