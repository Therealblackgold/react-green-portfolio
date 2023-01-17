import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from "react-bootstrap";
import meter1 from "../../assets/img/meter1.png";
import meter2 from "../../assets/img/meter2.png";
import meter3 from "../../assets/img/meter3.png";
import meter4 from "../../assets/img/meter4.png";
import meter5 from "../../assets/img/meter5.png";
import meter6 from "../../assets/img/meter6.png";
import meter7 from "../../assets/img/meter7.png";
import meter8 from "../../assets/img/meter8.png";
import meter9 from "../../assets/img/meter9.png";
import meter10 from "../../assets/img/meter10.png";
import colorSharp from "../../assets/img/color-sharp.png";
import "./Skills.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>
                I've worked as a freelance web developer since 2020, and I have
                a dream of my own startup one day that will focus on helping
                local businesses and public institution improve their efficiency
                through programming. I'm hard working passionate and ready to
                take on new challenges. you can find a list of my skills below.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {/* slider item 1 */}
                <div className="item">
                  <img src={meter1} alt="Skill" />
                  <h5>FullStack</h5>
                </div>
                {/* slider item 2 */}
                <div className="item">
                  <img src={meter2} alt="Skill" />
                  <h5>FullStack</h5>
                </div>
                {/* slider item 3 */}
                <div className="item">
                  <img src={meter3} alt="Skill" />
                  <h5>Frontend</h5>
                </div>
                {/* slider item 4 */}
                <div className="item">
                  <img src={meter4} alt="Skill" />
                  <h5>Frontend</h5>
                </div>
                {/* slider item 5 */}
                <div className="item">
                  <img src={meter5} alt="Skill" />
                  <h5>Frontend</h5>
                </div>
                {/* slider item 6 */}
                <div className="item">
                  <img src={meter6} alt="Skill" />
                  <h5>Backend</h5>
                </div>
                {/* slider item 7 */}
                <div className="item">
                  <img src={meter7} alt="Skill" />
                  <h5>Backend</h5>
                </div>
                {/* slider item 8 */}
                <div className="item">
                  <img src={meter8} alt="Skill" />
                  <h5>FullStack</h5>
                </div>
                {/* slider item 9 */}
                <div className="item">
                  <img src={meter9} alt="Skill" />
                  <h5>Backend</h5>
                </div>
                {/* slider item 10 */}
                <div className="item">
                  <img src={meter10} alt="Skill" />
                  <h5>Version Control</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
};

export default Skills;
