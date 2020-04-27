import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        //destracting
        const { advice } = response.data.slip;

        this.setState({ advice }); //advice: advice
      })
      .catch((error) => {
        console.log(error);
      });
  };

  reloadPage() {
    window.location.reload();
    return false;
  }

  render() {
    //destracting
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card fade" onClick={this.reloadPage} >
          <h1 className="heading ">{advice}</h1>
        </div>

        <div className="github-badge">
          
          <a class="github-button" 
          href="https://github.com/hasantezcan/advice-app" 
          data-size="large" 
          data-show-count="true"
          aria-label="Star hasantezcan/advice-app on GitHub">Star</a>
        </div>
      </div>
    );
  }
}

export default App;
