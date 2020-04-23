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
        <div className="card fade">
          <h1 className="heading " onClick={this.reloadPage}>
            {advice}
          </h1>
        </div>

        <div className="github-badge">
          <iframe
            className="github-iframe"
            src="https://ghbtns.com/github-btn.html?user=hasantezcan&repo=advice-app&type=star&count=true&size=large"
            frameborder="0"
            scrolling="0"
          ></iframe>
          <a className="github-username" href="https://github.com/hasantezcan">
            @hasantezcan
          </a>
        </div>
      </div>
    );
  }
}

export default App;
