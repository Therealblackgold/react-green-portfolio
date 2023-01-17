import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col className="mx-auto">
            <div className="contact-wrapper">
              <h2 className="text-center">Contact Details</h2>
              <ul className="contact-list">
                <li className="external-link">
                  <a
                    href="https://www.linkedin.com/in/gauta-ncholo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin" style={{ fontSize: 20 }}></i>
                    <span>Gauta Ncholo</span>
                  </a>
                </li>
                <li className="external-link">
                  <a
                    href="mailto:gauta.ncholo@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="bi bi-envelope-fill"
                      style={{ fontSize: 20 }}
                    ></i>
                    <span>gauta.ncholo@gmail.com</span>
                  </a>
                </li>
                <li className="external-link">
                  <a
                    href="https://github.com/Therealblackgold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github" style={{ fontSize: 20 }}></i>
                    <span>@Therealblackgold</span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
