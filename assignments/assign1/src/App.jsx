import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput.jsx'; 
import UserOutput from './components/UserOutput.jsx';

class App extends Component {
  state = { 
    username: [
      'erikthered', 
      'hobbitons', 
      'gandalfthegrey'
    ]
  }
  render() {
    return (
      <div className="App">
      <h1>Assignment 1</h1>
      <UserInput />
      <UserOutput
        username='erikthered'
      />
      <UserOutput
        username='hobbitons'
      />
      <UserOutput
        username='gandalfthegrey'
      />
      </div>
    );
  }
}

export default App;
