import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm a recent IT graduate from the University of Technology Sydney,
            specializing in
            <span className="purple"> Enterprise System Development</span>. I
            have a strong passion for
            <span className="purple"> software development</span>, including web
            application development and system integration.
            <br />
            <br />I am proficient in multiple programming languages, including
            <span className="purple"> Python, JavaScript, Java, and C#</span>.
            My expertise in
            <span className="purple"> HTML, CSS, and TypeScript</span> allows me
            to create dynamic and responsive user interfaces, particularly using
            <span className="purple"> React</span>.
            <br />
            <br />
            On the back-end, I have experience with
            <span className="purple"> .NET, Django, Spring, and Node.js</span>,
            facilitating seamless front-end to back-end integration.
            Additionally, I am knowledgeable in
            <span className="purple"> SQL and NoSQL</span> databases, including
            MySQL, MSSQL, and MongoDB, ensuring efficient data management and
            retrieval.
            <br />
            <br />I am proficient in using
            <span className="purple"> Git</span> and
            <span className="purple"> GitHub</span> for version control and
            collaboration, ensuring code integrity and effective teamwork.
            <br />
            <br />I am eager to contribute to innovative projects and leverage
            my skills in front-end and back-end development, as well as database
            management, to create impactful software solutions.
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
