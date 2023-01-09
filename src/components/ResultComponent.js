import React, { Component } from 'react';
import "./ResultComponent.css"

export default class ResultComponent extends Component {
  render() {
    return (
        <div className="result">
        <h1>Result</h1>
        <div className="scoreContainer">
          <h3>You need more practice!</h3>
          <h1 className="score">Your score is 20%</h1>
          <div className="flex">

            <div className="details">
              <h4>Totol number of questions</h4>
              <h4>Number of attempted questions</h4>
              <h4>Number of correct answers</h4>
              <h4>Number of wrong answers</h4>
            </div>

            <div className="number">
              <h4>15</h4>
              <h4>9</h4>
              <h4>3</h4>
              <h4>6</h4>
            </div>
            
          </div>
        </div>

        <div className="buttons">
          <button className="play">Play Again</button>
          <button className="home">Back to home</button>
        </div>
      </div>
    )
  }
}
