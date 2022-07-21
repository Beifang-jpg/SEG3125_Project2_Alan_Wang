import { Link } from 'react-router-dom';
import { useState } from "react";

import { Container } from 'react-bootstrap';
import { Row, Col, Figure, Button, Image, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import com_pic from './img/com_pic.jpg';
const Community_CH = () => {

    const [blogs, setBlogs] = useState([
        { title: '发布内容', mid: '与大家分享一下您的灵感', subtitle: '或者点击', id: 1 },
        { title: '假装我是内容', mid: '有趣的内容', subtitle: '结尾', id: 2 },
        { title: '写好了？点我上传', mid: '点击上传', subtitle: '顺便看看别人的想法', id: 2 },

    ])
    return (
        <div className="Community_CH">

            <Container fluid>
                <Row>
                    <Col sm={7}>
                        <div className="Image">
                            <img src={com_pic} alt="com_pic" />
                        </div>
                    </Col>
                    <Col sm={5}>
                        {blogs.map(blog => (
                            <div className="blog-preview" key={blog.id}>
                                <Link to={`/Fake_Community_CH`}>
                                    <h1>{blog.title} </h1>
                                    <p>{blog.mid} </p>
                                    <p> {blog.subtitle} </p>
                                </Link>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Community_CH;