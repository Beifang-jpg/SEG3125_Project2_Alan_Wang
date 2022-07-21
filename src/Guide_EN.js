import { useState } from "react";
import { Link } from "react-router-dom";
import wel_pic from './img/wel_pic.jpg';

import { Container } from 'react-bootstrap';
import { Row, Col, Figure, Button, Image, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Community from "./Community";

const Guide_CH = () => {

    const [blogs, setBlogs] = useState([
        { title: 'You can enter any pages through the upper bar', place: 'Guide_CH', subtitle: '', id: 1 },
        { title: 'If you are a new user, you can join our studio by creating an account', place: 'Guide_CH', subtitle: 'using 【SignOrCreate】', id: 2 },
        { title: 'After creation, you can reserve our service through 【Get start】', place: 'Guide_CH', subtitle: 'And Start modifying your car', id: 3 },
        { title: 'You can also share your thoughts through the community', place: 'Guide_CH', subtitle: 'Or see what other people think', id: 4 },
        { title: 'Here, try clicking here to jump to the registration screen', place: 'Create_A', subtitle: 'Join us!', id: 4 },

    ])
    return (
        <div className="Guide_CH">
            <Container fluid>
                <Row>
                    <Col sm={4}>
                        <div className="Image">
                            <img src={wel_pic} alt="wel_pic" />
                        </div>
                    </Col>
                    <Col sm={8}>
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
        </div>


    );
}

export default Guide_CH;