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
    otherState: 'Some other state', 
    showPersons: false
  }
  
  // switchNameHandler = (newName) => { 
  //   console.log('Switch name button was clicked');
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 25 }, 
  //       { name: 'Kim', age: 26 }, 
  //       { name: 'Grayson', age: 27 }
  //     ]
  //   });
  // }

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
        { name: 'Max', age: 25 }, 
        { name: event.target.value, age: 26 },{ name: 'Jack', age: 27 }
      ]
    })
  }
  togglePersonsHandler = () => { 
    const doesShow = this.state.showPersons; 
    this.setState({ 
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => { 
    // Does not maintain single source of truth, it changes the state.
    // const persons = this.state.persons; 
    // persons.splice(personIndex, 1); 
    // this.setState({
    //   persons: persons 
    // })

    // Create a copy of the state to maintain single source of truth

    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1); 
    this.setState({
      persons: persons
    })

  }

  render() {
    const style = { 
      backgroundColor: 'white', 
      font: 'inherit', 
      border: '1px solid blue', 
      padding: '8px', 
      borderRadius: '4px', 
      cursor: 'pointer'
    }

    let persons = null; 
    if (this.state.showPersons) { 
      persons = ( 
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
            name={person.name}
            age={person.age} 
            click={() => this.deletePersonHandler(index)}
            />
        })}
        {/* <Person 
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
          age={this.state.persons[2].age} /> */}
        </div>
    );
    }


    return (
      <div className="App">
        <h1>React Course</h1>
        {/* <button 
          onClick={() => this.switchNameHandler('Max')}
          style={style}
          >Switch name</button> */}
        <button 
          onClick={this.togglePersonsHandler}
          style={style}>Toggle List</button>

        {/* {
          this.state.showPersons ?
          <div>
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
        </div> : null
        } */}

        {persons}
      </div>
    );
  }
}

export default App;