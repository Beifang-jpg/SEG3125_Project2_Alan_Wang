import { useState } from "react";
import { Link } from "react-router-dom";
import wel_pic from './img/wel_pic.jpg';

import { Container } from 'react-bootstrap';
import { Row, Col, Figure, Button, Image, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Community from "./Community";

const Guide_CH = () => {

    const [blogs, setBlogs] = useState([
        { title: '您可以通过上方的按钮进入任意界面', place: 'Guide_CH', subtitle: '', id: 1 },
        { title: '如果您是新用户，可以通过创建账户加入我们的工作室', place: 'Guide_CH', subtitle: '使用【登入或注册】', id: 2 },
        { title: '创建之后可以通过【开始】预约我们的服务', place: 'Guide_CH', subtitle: '开始改装您的爱车', id: 3 },
        { title: '您也可以通过【社区】分享您的想法', place: 'Guide_CH', subtitle: '或者观摩其他人的想法', id: 4 },
        { title: '来，试一下点击这里跳转到注册界面', place: 'Create_A', subtitle: '加入我们吧！', id: 4 },

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