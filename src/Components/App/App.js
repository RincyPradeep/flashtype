import React, { Component } from "react";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import "./App.css";
import axios from "axios";
import { SAMPLE_PARAGRAPHS } from "../../data/SampleParagraph";

const TotalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9";
const DefaultState = {
  selectedparagraph: "",
  timerstarted: false,
  timeremaining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
};

class App extends Component {
  state = DefaultState;

  fetchNewParagraphFallback = () => {
    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];
    const selectedparagraphArray = data.split("");
    console.log("Splitted Array:", selectedparagraphArray);
    const testInfo = selectedparagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });
    this.setState({ ...DefaultState, testInfo, selectedparagraph: data });
  };

  startTimer = () => {
    this.setState({ timerstarted: true });
    const timer = setInterval(() => {
      if (this.state.timeremaining > 0) {
        // change wpm
        const timeSpent = TotalTime - this.state.timeremaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;

        this.setState({
          timeremaining: this.state.timeremaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  // startAgain = () =>this.fetchNewParagraph();
  startAgain = () => this.fetchNewParagraphFallback();

  handleUserInput = (inputValue) => {
    if (!this.state.timerstarted) this.startTimer();

    /* 
      1.Handle the underflow case - all the characters should be shown as not-attempted
      2.Handle the overflow case - eaarly exit
      3.Handle the backspace 
            - mark the [index+1] element as not-attempted (irrespective of whether the index is less than zero)
            - But, dont forget to check for the overflow cases
                  -(index+1 => out of bound, when index ===length-1)
      4. Update the status in the testInfo
            -Find out the last character in the inputValue and its index
            -check if the character at the same index in testInfo (state) matches 
                yes->"correct"
                no ->"incorrect"
      5.irrespective of the case, words, characters, speed(wpm) can be update
    */

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    // underflow case
    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });
      return;
    }

    // overflow case
    if (index >= this.state.selectedparagraph.length) {
      this.setState({ characters, words });
      return;
    }

    // make a copy of testInfo
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedparagraph.length - 1)) {
      testInfo[index + 1].status = "notAttempted";
    }

    // check for the correct typed letter
    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    // update the testInfo
    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    // update the state
    this.setState({ testInfo, words, characters });
  };

  // fetchNewParagraph = () => {
  //   axios.get(serviceUrl).then((response) => {
  //     console.log(response.data);

  //     const selectedparagraphArray = response.data.split("");
  //     console.log("Splitted Array:", selectedparagraphArray);
  //     const testInfo = selectedparagraphArray.map((selectedLetter) => {
  //       return {
  //         testLetter: selectedLetter,
  //         status: "notAttempted",
  //       };
  //     });
  //     this.setState({
  //       ...DefaultState,
  //       testInfo,
  //       selectedparagraph: response.data,
  //     });
  //   });
  // };

  componentDidMount() {
    // this.fetchNewParagraph();
    this.fetchNewParagraphFallback();
  }

  render() {
    console.log("Test info:", this.state.testInfo);
    return (
      <div className="app">
        <Nav />
        <Landing />
        <ChallengeSection
          selectedparagraph={this.state.selectedparagraph}
          timerstarted={this.state.timerstarted}
          timeremaining={this.state.timeremaining}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
