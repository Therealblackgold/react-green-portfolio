import { Container, Col, Row } from "react-bootstrap";
import "./Blog.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      // .get("http://localhost:8000/api/blogs/")
      .get("https://gautablogapi.pythonanywhere.com/api/blogs/")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="blogs">
      <Container>
        <Row className="text-center">
          <Col xs={12} md={6} xl={8} className="mx-auto align-items-center">
            <h2>Blogs</h2>
            {blogs &&
              blogs.map((blog) => (
                <Col key={blog.id} className="blog-wrapper">
                  <div className="blog-wrapper-heading">
                    <h3 className="text-center">{blog?.title}</h3>
                    <span>{blog.date}</span>
                  </div>
                  <div
                    className="my-3"
                    dangerouslySetInnerHTML={{
                      __html: blog.body.substr(0, 400),
                    }}
                  ></div>
                  <Link to={`/blogs/${blog.id}`}>Read More</Link>
                </Col>
              ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogList;
