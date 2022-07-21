import { useState } from "react";
import { Link } from "react-router-dom";
import wel_pic from './img/wel_pic.jpg';

import { Container } from 'react-bootstrap';
import { Row, Col, Figure, Button, Image, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Community from "./Community";

const Create_A = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Enter your Email/输入您的邮箱', place: 'Create_A', subtitle: '', id: 1 },
        { title: 'Enter your Password/输入密码', place: 'Create_A', subtitle: '', id: 2 },
        { title: 'Enter your Verification code/输入验证码', place: 'Create_A', subtitle: '', id: 2 },
        { title: 'Click here to create!/创建！', place: '', subtitle: '', id: 3 },

    ])
    return (
        <div className="Create_A">
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

export default Create_A;