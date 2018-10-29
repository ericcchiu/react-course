import React, { Component } from 'react';
import './App.css';
import Person from './components/Person.jsx'; 

class App extends Component {
  
  // constructor(props) { 
  //   super(props);
  //   this.state = { 
  //     persons: [ 
  //       { name: 'James', age: 25 }, 
  //       { name: 'Kim', age: 26 }, 
  //       { name: 'Grayson', age: 27 }
  //     ]
  //   } 
  // }

  state = { 
    persons: [ 
            { name: 'James', age: 25 }, 
            { name: 'Kim', age: 26 }, 
            { name: 'Grayson', age: 27 }
    ],
    otherState: 'Some other state'
  }
  
  switchNameHandler = (newName) => { 
    console.log('Switch name button was clicked');
    this.setState({
      persons: [
        { name: newName, age: 25 }, 
        { name: 'Kim', age: 26 }, 
        { name: 'Grayson', age: 27 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
        { name: 'Max', age: 25 }, 
        { name: event.target.value, age: 26 }, 
        { name: 'Jack', age: 27 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React Course</h1>
        <button 
          onClick={() => this.switchNameHandler('Max')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this,'Max!!!')} 
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          changed={this.nameChangedHandler}
        />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;