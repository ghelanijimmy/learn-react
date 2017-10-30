import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './Person/UserInput';
import UserOutput from './Person/UserOutput';

class App extends Component {

  state = {
    persons: [
      {
        name: 'Jimmy',
        age: 28,
        id: 0
      },
      {
        name: 'Aliya',
        age: 26,
        id: 1
      },
      {
        name: 'Fiki',
        age: 2,
        id: 2
      }
    ]
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div className="Person">
          {this.state.persons.map((person, index) => {
            return(
              <Person 
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src="https://jgdesigns.ca/wp-content/uploads/2015/08/JGDesignsIcon.png" className="" alt="logo" width="auto" height="70"/>
          <h1 className="App-title">Welcome to My React</h1>
        </header>
        <p className="App-intro">
          Let{"'"}s build someting cool!
        </p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
    
      </div>
    );
  }
}

export default App;
