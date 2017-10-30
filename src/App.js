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
        username: 'ghelanijimmy'
      },
      {
        name: 'Aliya',
        age: 26,
        username: 'akamalia'
      },
      {
        name: 'Fiki',
        age: 2,
        username: 'feekster'
      }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 28,
          username: 'changedUser',
        },
        {
          name: 'Aliya K',
          age: 26,
          username: 'changedUser',
        },
        {
          name: 'Fiki GK',
          age: 2,
          username: 'changedUser',
        }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: event.target.value,
          age: 28,
          username: 'changedUser',
        },
        {
          name: 'Aliya K',
          age: 26,
          username: 'changedUser',
        },
        {
          name: 'Fiki GK',
          age: 2,
          username: 'changedUser',
        }
      ]
    });
  }

  usernameClickHandler = () => {
    this.setState({
      persons:[
        {
          name: 'Jimmy',
          age: 28,
          username: 'changedUser',
        },
        {
          name: 'Aliya',
          age: 26,
          username: 'changedUser',
        },
        {
          name: 'Fiki',
          age: 2,
          username: 'changedUser',
        }
      ]
    });
  }

  usernameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "Jimmy",
          age: 28,
          username: event.target.value
        },
        {
          name: 'Aliya',
          age: 26,
          username: event.target.value
        },
        {
          name: 'Fiki',
          age: 2,
          username: event.target.value
        }
      ]
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src="https://jgdesigns.ca/wp-content/uploads/2015/08/JGDesignsIcon.png" className="" alt="logo" width="auto" height="70"/>
          <h1 className="App-title">Welcome to My React</h1>
        </header>
        <p className="App-intro">
          Let{"'"}s build someting cool!
        </p>
        <button style={style} onClick={() => this.switchNameHandler('JimmyG')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Jimmy GG')}
          changed={this.nameChangeHandler}
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
        
        <UserOutput 
          clicked={this.usernameClickHandler} 
          username={this.state.persons[0].username} 
        />
        <UserInput
          changed={this.usernameChangeHandler}
          username={this.state.persons[0].username}
        />
        
        <UserOutput
          clicked={this.usernameClickHandler}
          username={this.state.persons[1].username}
        />
        <UserInput
          changed={this.usernameChangeHandler}
          username={this.state.persons[1].username} 
        />
        
        <UserOutput
          clicked={this.usernameClickHandler}
          username={this.state.persons[2].username}
        />
        <UserInput
          changed={this.usernameChangeHandler}
          username={this.state.persons[2].username} 
        />

      </div>
    );
  }
}

export default App;
