import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ALSET Applications </h1>
        </header>
        <ol>
          <li><b>Starter</b> <a href="https://github.com/NUS-ALSET/lti-starter">github</a><span> </span> <a href="https://fir-lti-35fdc.firebaseapp.com/">demo</a></li>
              <p>Make assigments for students to submit links and other short text responses. </p>
          <li><b>CodeLink</b> <a href="https://github.com/NUS-ALSET/codelink">github</a><span> </span> <a href="https://codelink-dev.firebaseapp.com/">demo</a></li>
              <p>Assign python problems which are checked in the browser using Brython. </p>
          <li><b>Achievements</b> <a href="https://github.com/NUS-ALSET/achievements">github</a><span> </span> <a href="https://achievements-dev.firebaseapp.com/">demo</a></li>
              <p>Assign students to complete levels on CodeCombat.com. </p>
          <li><b>Jupyter Quest</b> <a href="https://github.com/NUS-ALSET/jupyter-quest">github</a><span> </span> <a href="https://jupyter-dev.firebaseapp.com/">demo</a></li>
              <p>Assign Jupyter notebook problems. </p>
          <li><b>Games </b></li>
          <li><b>Events</b></li>
          <li><b>MemoryLift</b> </li>
          <li><b>Speaking Practice</b> </li>
          <li><b>Planner</b></li>
        </ol>
      </div>
    );
  }
}

export default App;
