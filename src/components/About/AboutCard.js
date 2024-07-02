import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm a recent IT graduate from UTS with a passion for{" "}
            <span className="purple">front-end development.</span>
            <br />
            <br />A University of Technology Sydney graduate, I have a strong
            passion for front-end development, specializing in crafting engaging
            user interfaces with{" "}
            <span className="purple">
              HTML, CSS, and JavaScript/TypeScript.
            </span>{" "}
            My proficiency in JavaScript libraries, especially{" "}
            <span className="purple">React</span>, enables me to build dynamic,
            responsive designs.
            <br />
            <br />
            On the back-end side, I'm knowledgeable in{" "}
            <span className="purple">Python, C#, and Swift</span>, and have
            experience with <span className="purple">Node.js</span>, which
            allows for seamless front-end to back-end integration. I also bring
            database knowledge, with a solid understanding of both{" "}
            <span className="purple">SQL</span> and{" "}
            <span className="purple">NoSQL</span> databases, ensuring data is
            efficiently managed and accessed.
            <br />
            <br />
            In addition to my technical skills, I am also proficient in using{" "}
            <span className="purple">Git</span> and{" "}
            <span className="purple">GitHub</span> for version control and
            collaboration. This expertise allows me to effectively manage and
            collaborate on projects, ensuring code integrity and facilitating
            teamwork.
            <br />
            <br /> I'm seeking opportunities to leverage my front-end mastery,
            back-end understanding, and database knowledge to contribute to
            innovative web or software development projects.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Alone we can do so little; together we can do so much."{" "}
          </p>
          <footer className="blockquote-footer">Helen Keller</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
