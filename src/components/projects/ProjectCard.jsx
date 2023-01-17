import { Col } from "react-bootstrap";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, imgUrl, linkUrl, gitHubUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="project-img-box">
        <img src={imgUrl} alt="project" />
        <div className="project-content">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="external-link">
            <i className="bi bi-globe2" style={{ fontSize: 20 }}></i>
            <a href={linkUrl} target="_blank" rel="noreferrer">
              Live Website
            </a>
          </div>
          <div className="external-link">
            <i className="bi bi-github" style={{ fontSize: 20 }}></i>
            <a href={gitHubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
