import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {
        name: 'Jimmy',
        age: 28
      },
      {
        name: 'Aliya',
        age: 26
      },
      {
        name: 'Fiki',
        age: 2
      }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 28
        },
        {
          name: 'Aliya K',
          age: 26
        },
        {
          name: 'Fiki GK',
          age: 2
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://jgdesigns.ca/wp-content/uploads/2015/08/JGDesignsIcon.png" className="" alt="logo" width="auto" height="70"/>
          <h1 className="App-title">Welcome to My React</h1>
        </header>
        <p className="App-intro">
          Let{"'"}s build someting cool!
        </p>
        <button onClick={() => this.switchNameHandler('JimmyG')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Jimmy GG')}
        >
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
        </Person>
      </div>
    );
  }
}

export default App;
