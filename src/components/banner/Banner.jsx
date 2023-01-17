import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-me.png";
import "./Banner.css";

const Banner = () => {
  // animation loop counter
  const [loopNum, setLoopNum] = useState(0);

  // remove current animation text
  const [isDeleting, setIsDeleting] = useState(false);

  // animation text
  const toRotate = [
    "Web Developer",
    "MERN Dev",
    "JavaScript Dev",
    "React Dev",
    "Express Dev",
    "Node Dev",
  ];

  // current animation text
  const [currentText, setCurrentText] = useState("");

  // animation speed
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // animation period
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };

    // run every time the text changes
  }, [currentText]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, currentText.length - 1)
      : fullText.substring(0, currentText.length + 1);

    setCurrentText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} xl={8}>
            <span className="tagline">welcome to my Portfolio</span>
            <h1>
              {`I'm Gauta Ncholo `}
              {/* <span className="wrap">{currentText}</span> */}
            </h1>
            <h3>FullStack Web Developer</h3>
            <p>
              Gauta meaning gold pronounced like Gauteng the city of gold. I'm a
              professional fullstack web developer based in Johannesburg using
              my passion for coding as a tool to helping companies and
              individuals improve their workflow through dynamic softwares and
              web applications. Ive been programming for about 3 years plus,
              found my passion at a late stage in life and since then
              programming has been my life.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={12} xl={4}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
