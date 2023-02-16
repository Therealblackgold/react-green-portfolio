import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={10} className="mx-auto">
            <div className="about-wrapper">
              <h2>About Me</h2>
              <p>
                I learned programming in many different ways from taking online
                courses and reading books Im currently enrolled in a fulltime
                fullstack web development course with Hyperion Dev. I conceder
                my a self taught programmer with a clear road map and high
                evaluation standards set by an institution like Hyperion Dev I
                can finally get the support I need towards starting my carrier
                in tech. Ive included a summarized list of my current and
                completed courses.
              </p>
              <h3>EDUCATIONAL HISTORY</h3>
              <ListGroup as="ul">
                <ListGroup.Item as="li">
                  Hyperion Dev Fullstak Web Development Bootcamp
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Complete Python Bootcamp: Zero to Hero By Jose Portilla
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Python & Django Full Stack Web Developer Bootcamp By Jose
                  Portilla
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Django 2.2 & Python|The Ultimate Web Development Bootcamp By
                  Nick Walter
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Complete JavaScript Course By Jonas Schmedtmann
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Build Responsive Real World Websites With HTML 5 and CSS By
                  Jonas Schmedtmann
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Advanced CSS and Sass By Jonas Schmedtmann
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
