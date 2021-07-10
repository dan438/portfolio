import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div class="about-text">
        <h1>About Me</h1>
        <h2>FrontEnd Web Developer</h2>
        <p>
          Daniel brings web design that users will fall in love with into
          reality. An incredibly smart, super flexible, amazingly powerful and
          visual by nature. This how websites are meant to be.
        </p>
        <button>View More Details</button>
      </div>

      <div class="about-model">
        <img src="/images/about.svg" alt="model" />
      </div>
    </div>
  );
}

export default About;
