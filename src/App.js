import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Elon Musk", age: 21 },
      { name: "Bill Gates", age: 22 },
      { name: "Mark Zingerburger", age: 23 }
    ]
    
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age = {this.state.persons[0].age}> <p>CEO SpaceX</p> </Person>
        <Person name={this.state.persons[1].name} age = {this.state.persons[1].age}> <p>Founder Microsoft</p> </Person>
        <Person name={this.state.persons[2].name} age = {this.state.persons[2].age}> <p>CEO Facebook</p> </Person>
      </div>
    );
  }
}

export default App;
