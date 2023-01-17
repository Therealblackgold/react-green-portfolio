import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import projImg4 from "../../assets/img/project-img4.png";
import projImg5 from "../../assets/img/project-img5.png";
import projImg6 from "../../assets/img/project-img6.png";
import projImg7 from "../../assets/img/project-img7.png";
import projImg8 from "../../assets/img/project-img8.png";
import projImg0 from "../../assets/img/project-img0.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Itunes Search App",
      description:
        "React JS,Node JS,Express JS project using itunes search API",
      imgUrl: projImg1,
      linkUrl: "https://itunes-search-app.onrender.com",
      gitHubUrl: "https://github.com/Therealblackgold/L2T21-itunes-search-app",
    },
    {
      title: "Ticket Management App",
      description: "MERN,Auth,JWT,Redux",
      imgUrl: projImg0,
      linkUrl: "https://gtechapp.onrender.com",
      gitHubUrl: "https://github.com/Therealblackgold/L3T15-Capstone-project",
    },
    {
      title: "Memory Game",
      description: "React JS Dinosaur themed memory game,with self timer",
      imgUrl: projImg2,
      linkUrl: "https://dinosaur-world.onrender.com/",
      gitHubUrl: "https://github.com/Therealblackgold/L2T12-React-Memory-Game",
    },
    {
      title: "Online Store Project",
      description: "Shopping cart app with HTML5, CSS, JavaScript",
      imgUrl: projImg3,
      linkUrl: "https://phenomenal-toffee-687788.netlify.app/index.html",
      gitHubUrl: "https://github.com/Therealblackgold/L1T15-online-store-app",
    },
    {
      title: "Multi User Todo",
      description: "MERN Stack Todo app with JWT Authentication",
      imgUrl: projImg8,
      linkUrl: "https://github.com/Therealblackgold/L3T09-mern-jwt-auth",
      gitHubUrl: "https://github.com/Therealblackgold/L3T09-mern-jwt-auth",
    },
    {
      title: "Car Management",
      description: "MERN Stack crud project",
      imgUrl: projImg7,
      linkUrl: "https://github.com/Therealblackgold/L3T07-mern-crud-car-app",
      gitHubUrl: "https://github.com/Therealblackgold/L3T07-mern-crud-car-app",
    },
    {
      title: "The Red Dragon",
      description: "React JS Dragon theme random card game",
      imgUrl: projImg5,
      linkUrl: "https://gautancholo-card-game.netlify.app/",
      gitHubUrl: "https://github.com/Therealblackgold",
    },
    {
      title: "Currency Convertor",
      description: "Convert USD to ZAR/GBP/EUR React JS",
      imgUrl: projImg4,
      linkUrl: "https://gautancholo-card-game.netlify.app/",
      gitHubUrl: "https://github.com/Therealblackgold",
    },
    {
      title: "XYZ CAFE",
      description: "Fast Food Website React JS UI",
      imgUrl: projImg6,
      linkUrl: "https://gautancholo-xyz-cafe.netlify.app/",
      gitHubUrl: "https://github.com/Therealblackgold",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2 className="mb-5">Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">MERN</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>Lorem ipsum dolor sit amet.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>Lorem ipsum dolor sit amet.</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
        <img src={colorSharp2} alt="" className="background-img-right" />
      </Container>
    </section>
  );
};

export default Projects;
