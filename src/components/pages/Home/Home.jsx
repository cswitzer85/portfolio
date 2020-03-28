import "./Home.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <Carousel>
      <div>
        <img src="https://raw.githubusercontent.com/cswitzer85/Basic-Portfolio/master/Assets/PasswordGeneratorScreenShot.png" />
        <a href="https://cswitzer85.github.io/PasswordGenerator/">
          <p className="legend" id="legend1">Launch Password Generator</p>
        </a>
      </div>
      <div>
        <img src="https://raw.githubusercontent.com/cswitzer85/Basic-Portfolio/master/Assets/WeatherAppScreenShot.png" />
        <a href="https://cswitzer85.github.io/weather-dashboard/">
          <p className="legend" id="legend2">Launch Weather App</p>
        </a>
      </div>
      <div>
        <img src="https://raw.githubusercontent.com/cswitzer85/Basic-Portfolio/master/Assets/PlannerScreenShot.png" />
        <a href="https://cswitzer85.github.io/plannerForTheDay/">
          <p className="legend" id="legend3">Launch Day Planner</p>
        </a>
      </div>
      <div>
        <img src="https://raw.githubusercontent.com/cswitzer85/Basic-Portfolio/master/Assets/BootcampQuiz.png" />
        <a href="https://cswitzer85.github.io/bootcamp-quiz/">
          <p className="legend" id="legend4">Launch Coding Quiz</p>
        </a>
      </div>
      <div>
        <img src="https://raw.githubusercontent.com/cswitzer85/Basic-Portfolio/master/Assets/PokeQuizKidFriendlyScreenShot.png" />
        <a href="https://cswitzer85.github.io/Project1/">
          <p className="legend" id="legend5">Launch PokeQuiz</p>
        </a>
      </div>
      <div>
        <img src="https://raw.githubusercontent.com/cswitzer85/Basic-Portfolio/master/Assets/TakeNotesDelete.png" />
        <a href="https://serene-stream-86216.herokuapp.com/">
          <p className="legend" id="legend6">Launch Take Note</p>
        </a>
      </div>
      <div>
        <img src="https://raw.githubusercontent.com/cswitzer85/Basic-Portfolio/master/Assets/project2MemberPage.png" />
        <a href="Launch Hosted Application">
          <p className="legend" id="legend7">Launch Burger App</p>
        </a>
      </div>
      <div>
        <img src="https://raw.githubusercontent.com/cswitzer85/Basic-Portfolio/master/Assets/BurgerScreenShot.png" />
        <a href="https://project2-cody-gen-leo.herokuapp.com/">
          <p className="legend" id="legend8">Launch Blog App</p>
        </a>
      </div>
      <div>
        <img src="https://image.freepik.com/free-vector/coming-soon-neon-sign-vector-brick-wall-background_118419-102.jpg" />
        <a href="https://github.com/cswitzer85">
          <p className="legend" id="legend9">Coming Soon</p>
        </a>
      </div>
    </Carousel>
  );
};

export default Home;
