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
              description="My personal portfolio which features some of my github projects as well as my resume and technical skills."
              ghLink="https://github.com/shp5669/sean-portfolio"
              demoLink="https://shp5669.github.io/sean-portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="Todo List"
              description="This to-do list application is a dynamic, user-friendly web application developed using React.js, designed to help users manage their daily tasks efficiently."
              ghLink="https://github.com/shp5669/todolist"
              demoLink="https://shp5669.github.io/todolist/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App"
              description="This Interactive, Simple Weather web application crafted using React.js, designed to offer users real-time weather updates for locations worldwide."
              ghLink="https://github.com/shp5669/WeatherApp"
              demoLink="https://shp5669.github.io/WeatherApp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="Simple Calculator application built with HTML, CSS, JavaScript."
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
