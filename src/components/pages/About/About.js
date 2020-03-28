import React from "react";
import "./About.css";


const About = () => (
  <div>
    <div className="col-lg-8 col-md-12 col-sm-12">
      <div className="mainContainer">
        <h1>About Me</h1>
        <hr />
        <div>
          <img src="https://raw.githubusercontent.com/cswitzer85/Basic-Portfolio/master/Assets/CS%20Avatar%20small.jpg" id="profilePicture" alt="Image of self" />
          <p>
            Budding developer with problem solving and process optimization background, including more than 5 years of
            leadership. Academic achievements include President’s List, National Technical Honors Society, 3.4 GPA and
            recently earned Full Stack Development Certificate at Southern Methodist University. Workplace accolades
            include numerous MVP awards and “Member of the Year”.
            <br /><br />
            In my first year as Internal Assistant Service Manager
            at Park Place, I was able to build a relationship and collaborate with four separate teams to achieve a 30%
            reduction in cycle time for pre-owned vehicle reconditioning.
            <br /><br />
            By nature I am a focused, resilient and
            passionate perfectionist. As luck would have it, those attributes align extremely well with programming. I
            find
            myself eager to learn how things work and rally my peers to bond and collaborate efficiently, while having
            fun! By leveraging technical expertise and emotional intelligence, I’m a unique contributor that adds value,
            efficiency and motivation to my team.
            <br />
            <hr />
            My hobbies include archery, auto racing, food, smoking/grilling, dry aging beef, carpentry, design, coffee,
            tea and now coding.
          </p>
        </div>
      </div>
    </div>  
  </div>
);

export default About;
