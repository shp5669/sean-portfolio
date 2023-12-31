import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sean Park </span>
            <br />
            <br />
            I'm a recent IT graduate from UTS with a passion for front-end development.
            <br />
            <br />
            My expertise lies in languages like JavaScript, Python, and C#, and technologies such as React and AWS. 
            <br />
            <br />
            I've honed my skills through a hands-on internship and diverse academic projects.
            <br />
            <br />
            Committed to creating seamless user experiences, I'm eager to contribute to innovative software solutions
            <br />
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> UTS Graduate: Information Technology degree.
            </li>
            <li className="about-activity">
              <ImPointRight /> Skills: JavaScript, Python, C#, React, AWS.
            </li>
            <li className="about-activity">
              <ImPointRight /> Experience: Front End Developer internship at LUXit.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Stay Hungry Stay Foolish"{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
