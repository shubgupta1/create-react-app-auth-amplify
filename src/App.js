import React, { Component } from "react";
import logo from "./logo.svg";
import image from "../src/images/japanolympicslogo.png";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import Amplify, { Auth } from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Japan Olympics 2020</h1>
          <img src={image} alt="logo" className="App-logo" />
          <video width="850" height="500" controls>
            <source
              src="https://s3.amazonaws.com/assignment2.video-on-demand/UniSA.mp4"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
