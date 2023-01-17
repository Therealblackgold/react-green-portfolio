import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  // declaring state to set blog after making an api call
  const [blog, setBlog] = useState([]);

  // destructuring blogId value from route params with useParams
  const { blogId } = useParams();

  // getting blog by id
  useEffect(() => {
    axios
      // .get(`http://localhost:8000/api/blogs/${blogId}/`)
      .get(`https://gautablogapi.pythonanywhere.com/api/blogs/${blogId}/`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [blogId]);

  return (
    <section className="blogs">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={8} className="mx-auto align-items-center">
            <div className="blog-wrapper">
              <div className="blog-wrapper-heading">
                <h3 className="text-center">{blog?.title}</h3>
                <span>{blog.date}</span>
              </div>
              <div
                className="blog-light my-3"
                dangerouslySetInnerHTML={{
                  __html: blog?.body,
                }}
              ></div>
              <Link to="/blogs">Back to blogs</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
