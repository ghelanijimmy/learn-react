import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
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
        <Person name="Jimmy" age="28"></Person>
        <Person name="Aliya" age="26" ></Person>
        <Person name="Rafiki" age="2">I LOVE FOOD</Person>
      </div>
    );
  }
}

export default App;
