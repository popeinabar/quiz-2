import { Component } from "react";
// import HomeComponent from "./components/HomeComponent"
import QuizComponent from "./components/QuizComponent"
// import ResultComponent from "./components/ResultComponent"

export default class App extends Component{
  render(){
    return(
      <div>
        {/* <HomeComponent /> */}
        <QuizComponent />
        {/* <ResultComponent /> */}
      </div>
    );
  };
}