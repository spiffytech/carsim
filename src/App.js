import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.lastTickTime = new Date().getTime();

    ////////////
    // Initialize state here

    ////////////


    const animationFrameCallback = () => {
      this.simulateCar(new Date().getTime() - this.lastTickTime);
      this.lastTickTime = new Date().getTime();
      window.requestAnimationFrame(animationFrameCallback);
    }
    window.requestAnimationFrame(animationFrameCallback);
  }

  // Fill this in
  /**
   * This function simulates the car.
   * @param {number} lastTickDuration How long it's been since we last ticked
   */
  simulateCar(lastTickDuration) {
    console.log('simulating');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
