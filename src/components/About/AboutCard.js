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
            I'm a recent IT graduate from UTS with a passion for{" "}
            <span className="purple">front-end development.</span>
            <br />
            <br />
            My academic and professional journey has equipped me with a robust
            foundation in languages not only limited to{" "}
            <span className="purple">HTML, CSS, Javascript/TypeScript</span> but
            also
            <span className="purple"> Python, C#, C++, Java. </span>
            <br />
            <br />
            My internship at LUXIT as a Frontend Software Engineer Intern, where
            I developed and implemented{" "}
            <span className="purple"> responsive user interface</span>, and my
            participation in software engineering virtual experience programs,
            have honed my skills in{" "}
            <span className="purple">cloud computing, DevOps </span>
            and
            <span className="purple"> full-stack development.</span>
            <br />
            <br />I am currently looking for the role to work at the forefront
            of <span className="purple">web or software development. </span>My
            strengths in problem-solving, brainstorming, and a keen sense of
            curiosity will make me a valuable asset to any team.
          </p>

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
