import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const projects = [
  {
    title: "Comprehensive Bus Information System",
    description: "A system to provide real-time bus details with map integration.",
    techStack: "PHP, MySQL, Leaflet.js",
    link: "https://genuine-peony-8bdb14.netlify.app",
  },
  {
    title: "Task Management App",
    description: "A React-based app to manage tasks efficiently.",
    techStack: "React, Bootstrap",
    link: "https://idyllic-kangaroo-397d43.netlify.app",
  },
];

const Projects = () => {
  return (
    <Container id="projects" className="my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text><small>Tech Stack: {project.techStack}</small></Card.Text>
                <Button variant="primary" href={project.link}>
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
