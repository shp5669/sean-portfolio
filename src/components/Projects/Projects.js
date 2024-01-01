import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import restaurant from "../../Assets/Projects/RestaurantManagement.png";
import convinience from "../../Assets/Projects/ConvinienceStore.png";
import cryogenic from "../../Assets/Projects/CryogenicWiring.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Restaurant Management System"
              description="Designed and developed sales charts and reservation system for restaurant web application.
              Build with HTML, CSS, JavaScript, Chart.js, MongoDB"
              ghLink="https://github.com/owenbalnaves-james/AdvancedSoftwareDevelopment"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={convinience}
              isBlog={false}
              title="Store Management System"
              description="Created a store management system to facilitate efficient inventory tracking, sales charting, and managing employees for a retail store.
              Build with C#, MSSQL"
              ghLink="https://github.com/shp5669/ConvinienceStore"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryogenic}
              isBlog={false}
              title="Cryogenic Wiring GUI"
              description="Contribute to produce interactive web application for Simulating Cryogenic Wiring GUI with UTS clients.
              Build with JavaScript, React, Node.js, TypeScript, Tailwind"
              ghLink="https://code.research.uts.edu.au/dashboard/projects"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
