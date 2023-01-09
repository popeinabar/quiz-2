import React, { Component } from 'react';
import "./QuizComponent.css"
import questions from './quizQuestion'

export default class QuizComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      questions: questions,
      current: {},
      next: {},
      previous: {},
      currentQuesno: 0
    }
  }

  componentDidMount(){
    this.displayQuestion(this.state.questions, this.state.current, this.state.next, this.state.previous)
  }

  displayQuestion = (questions = this.state.questions, current, next, previous) => {
    let {currentQuesno} = this.state
    if(this.state.questions.length !== 0){
      questions = this.state.questions
      current = questions[currentQuesno]
      next = questions[currentQuesno + 1]
      previous = questions[currentQuesno - 1]

      this.setState({current, next, previous})
    }
  }

  nextButton = () =>{
    if(this.state.next !== undefined){
      this.setState (prevState => ({
        currentQuesno: prevState.currentQuesno + 1
      }), () =>{
        this.displayQuestion(this.state.state, this.state.current, this.state.next, this.state.previous)
      })
    }
  }

  previousButton = () =>{
    if(this.state.previous !== undefined){
      this.setState (prevState => ({
        currentQuesno: prevState.currentQuesno - 1
      }), () =>{
        this.displayQuestion(this.state.state, this.state.current, this.state.next, this.state.previous)
      })
    }
  }

  quitButton = () =>{
    if(window.confirm("Are you sure you want to quit?")){
      window.location.reload(false)
    }
  }

  render() {
  
    const {current} = this.state;

    return (
        <div className="question">
            <h1>Question</h1>
            <div>
              <span>{current.number} of 15</span>
              <h3>{current.question}</h3>
            </div>

            <div className="container">
              <p className="option">{current.optionA}</p>
              <p className="option">{current.optionB}</p>
            </div>
  
            <div className="container">
              <p className="option">{current.optionC}</p>
              <p className="option">{current.optionD}</p>
            </div>
  
            <div className="buttonsBox">
              <button className="previous" onClick={this.previousButton}>Previous</button>
              <button className="next"onClick={this.nextButton}>Next</button>
              <button className="quit"onClick={this.quitButton}>Quit</button>
            </div>
        </div>
    )
  }
}
