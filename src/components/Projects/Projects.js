import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import restaurant from "../../Assets/Projects/RestaurantManagement.png";
import convinience from "../../Assets/Projects/ConvinienceStore.png";
import cryogenic from "../../Assets/Projects/CryogenicWiring.png";
import todolist from "../../Assets/Projects/todolist.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import calculator from "../../Assets/Projects/calculator.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";

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
              imgPath={portfolio}
              isBlog={false}
              title="Sean's Portfolio"
              description="My personal portfolio seanpark.tech which features some of my github projects as well as my resume and technical skills."
              ghLink="https://github.com/shp5669/sean-portfolio"
              demoLink="https://shp5669.github.io/sean-portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="Todo List"
              description="Interactive todo list.
              Build with JavaScript, React"
              ghLink="https://github.com/shp5669/todolist"
              demoLink="https://shp5669.github.io/todolist/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App"
              description="Contribute to produce interactive web application for Simulating Cryogenic Wiring GUI with UTS clients.
              Build with JavaScript, React, Node.js, TypeScript, Tailwind"
              ghLink="https://github.com/shp5669/WeatherApp"
              demoLink="https://shp5669.github.io/WeatherApp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="Created a store management system to facilitate efficient inventory tracking, sales charting, and managing employees for a retail store.
              Build with C#, MSSQL"
              ghLink="https://github.com/shp5669/calculator"
              demoLink="https://shp5669.github.io/calculator/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
