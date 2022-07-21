import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from './img/Logo.png';

import { Container } from 'react-bootstrap';
import { Row, Col, Figure, Button, Image, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'I need some guide through/我需要点引导', place: 'Guide', subtitle: 'Click Here and Start', id: 1 },
    { title: 'Thanks, just take me to booking/不用，带我去订车吧', place: 'Book_homepage', subtitle: 'Click to Book', id: 2 },
  ])

  return (
    <div className="home">
      <Container fluid>
        <Row>
          <Col sm={5}>
            <div className="Image">
              <img src={Logo} alt="Logo"  />
            </div>
          </Col>
          <Col sm={7}>
            {blogs.map(blog => (
              <div className="blog-preview" key={blog.id} >
                <Link to={`/${blog.place}`}>
                  <h2>{blog.title}</h2>
                  <p>{blog.subtitle}</p>
                </Link>
              </div>
            ))}
          </Col>
        </Row>
      </Container>

      {/* {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/${blog.place}`}>
            <h2>{blog.title}</h2>
            <p>{blog.subtitle}</p>
          </Link>
        </div>
      ))} */}

      <div>
        {/* <div className="Image">
          <img src={Logo} alt="Logo" style={{ width: '300px' }} />
        </div> */}
      </div>
    </div>
  );
}

export default Home;