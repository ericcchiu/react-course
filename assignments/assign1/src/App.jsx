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
  changeUsernameHandler = (event) => { 
    console.log('The changeUsernameHandler was activated');
    this.setState({
      username: [
        event.target.value, 
        'hobbitons', 
        'gandalfthegrey'
      ]
    })

  } 

  render() {
    return (
      <div className="App">
      <h1>Assignment 1</h1>
      <UserInput 
        changeInput={this.changeUsernameHandler}
        currentUser={this.state.username[0]}
      />
      <UserOutput
        username={this.state.username[0]}
      />
      <UserOutput
        username={this.state.username[1]}
      />
      <UserOutput
        username={this.state.username[2]}
      />
      </div>
    );
  }
}

export default App;
