import React from "react";
import image from "../static/welcome2.jpg"
import Button from 'react-bootstrap/Button'

const welcomeBackground = {backgroundImage: `url(${image})`};

export function WelcomePage(props) {
  return (
    // <main className="Page">
    //   <h1>Awesome Answers</h1>
    //   <p>Synergizing your questions with fantacular answers!</p>
    // </main>
    <>
    <div className="topWrapper" style={welcomeBackground}>
    <div className="welcomeTitle">
        <h1>Coffee and Speak</h1>
        <p>Find your best private teacher</p>
        <Button className="signup-btn">Sign Up!</Button>
    </div>
    </div>
    </>
  );
}
