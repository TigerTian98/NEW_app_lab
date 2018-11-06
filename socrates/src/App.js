import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Components/Student.js'
import Student2 from './Components/Student2.js'


class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        students: [
          {name: 'Christian'},
          {name: 'Matt'},
          {name: 'Cindy'},
          {name: 'Xu'},
          {name: 'Leon'},
        ],

        students2: [
          {name: 'Christian'},
          {name: 'Matt'},
          {name: 'Cindy'},
          {name: 'Xu'},
          {name: 'Leon'},
        ],

        //our pickFromAll boolean
        pickedStudent: null,
        pickedStudent2: null
      }
    }
  
    //handle picking a random student
    pickRandomStudent = () => {
      //call this.setState to update our state
      this.setState(() => ({
        pickedStudent: this.state.students[Math.floor(Math.random() * this.state.students.length)]
      }))
    }

    pickRandomStudent2 = () => {
      //call this.setState to update our state
      this.setState(() => ({
        pickedStudent2: this.state.students2[Math.floor(Math.random() * this.state.students2.length)]
      }));
      this.state.students2.splice (this.state.students2.indexOf(this.state.pickedStudent2), 1);
      if (this.state.students2.length == 0) {
        alert (`Running out of students to pick!
Please refresh your browser!`);
      }
    }

    render() {
    return (
      <div className="App">
      <br/>
      <br/>
        <Student student={this.state.pickedStudent}/>
        <button onClick={this.pickRandomStudent}>Pick a Student with Repetition</button>
        <br/>
        <br/>
        <Student2 student2={this.state.pickedStudent2}/>
        <button onClick={this.pickRandomStudent2}>Pick a Student without Repetition</button>
        <br/>
      </div>
    );
  }
}

export default App;