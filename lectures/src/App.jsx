import React, { Component } from 'react';
import './App.css';
import Person from './components/Person.jsx'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Course</h1>
        <Person name='James' age='25' />
        <Person name='Kim' age='26' />
        <Person name='Grayson' age='27' />
      </div>
    );
  }
}

export default App;