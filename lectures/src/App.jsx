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
            { id: '001', name: 'James', age: 25 }, 
            { id: '002', name: 'Kim', age: 26 }, 
            { id: '003', name: 'Grayson', age: 27 }
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

  nameChangedHandler = (event, id) => {
    // Use findIndex to determine the targeted element's index that is changed 
    const personIndex = this.state.persons.findIndex(individual => {
      return individual.id === id;
    });

    // Create a new copy of the person object to maintain single source of truth
    const person = { 
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex]);

    // Update the name property of the target element 
    person.name = event.target.value; 

    // Create a copy of the original state 
    const persons = [...this.state.persons]; 
    // Reassign the changed person object 
    persons[personIndex] = person;
    
    // Update the state 
    this.setState({
      persons: persons
    })
    
    // this.setState({ 
    //   persons: [
    //     { id: '001', name: 'Max', age: 25 }, 
    //     { id: '002', name: event.target.value, age: 26 },
    //     { id: '003', name: 'Jack', age: 27 }
    //   ]
    // })
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
            key={person.id} 
            changed={(event) => this.nameChangedHandler(event, person.id)}
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