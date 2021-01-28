import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <Person name="Elon Musk" age = "21"> <p>CEO SpaceX</p> </Person>
        <Person name="Bill Gates" age = "22"> <p>Founder Microsoft</p> </Person>
        <Person name="Mark Zingerburger" age = "23"> <p>CEO Facebook</p> </Person>
      </div>
    );
  }
}

export default App;
