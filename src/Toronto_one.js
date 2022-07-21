import { Link } from 'react-router-dom';
import { useState } from "react";

import { Container } from 'react-bootstrap';
import { Row, Col, Figure, Button, Image, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Trt_1 from './img/Trt_1.png';
const Toronto_one = () => {

    const [blogs, setBlogs] = useState([
        { title: 'English Service', Phone: 'Phone: 6777-985-357', subtitle: 'Email:3125Studio_Toronto_one_En@gmail.com', id: 1 },
        { title: '中文客服', Phone: '电话: 878-345-889', subtitle: '邮箱:3125Studio_Toronto_one_CH@gmail.com', id: 2 },
        { title: '工作时间/Working time', Phone: 'Mon-Fri: 10am-10pm', subtitle: 'Sat-Sun: 10am-11pm', id: 2 },

    ])
    return (
        <div className="Toronto_one">

            <Container fluid>
                <Row>
                    <Col sm={7}>
                        <div className="Image">
                            <img src={Trt_1} alt="Trt_1" />
                        </div>
                    </Col>
                    <Col sm={5}>
                        <Link to={`/Contect`}>
                            {blogs.map(blog => (
                                <div className="blog-preview" key={blog.id}>
                                        <h1>{blog.title} </h1>
                                        <p>{blog.Phone} </p>
                                        <p> {blog.subtitle} </p>
                                </div>
                            ))}
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Toronto_one;