import { useState } from "react";
import { Link } from "react-router-dom";
import car from './img/car.jpg';
import { Container } from 'react-bootstrap';
import { Row, Col, Figure, Button, Image, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Better_CH = () => {
    const [blogs, setBlogs] = useState([
        { title: '您可以用下方的工具调整参数', place: 'Get_Start_CH', subtitle: '或者点击这里返回', id: 1 ,more:''},
        { title: '整车颜色', place: 'Better_CH', subtitle: '调整', id: 2 ,more:'磨砂度'},
        { title: '车身细节', place: 'Better_CH', subtitle: '调整', id: 3 ,more:'另一个'},
        { title: '内部细节', place: 'Better_CH', subtitle: '底盘', id: 4 ,more:'引擎'},
        { title: '车胎', place: 'Better_CH', subtitle: '轮毂', id: 5 ,more:'材质'},
        { title: '内饰部分', place: 'Better_CH', subtitle: '皮革材质', id: 5 ,more:'其他'},
        { title: '您有更多的灵感？', place: 'Better_CH', subtitle: '点击这里，和我们的设计师面对面沟通', id: 4 ,more:'我们将提供高级订制服务'},
        { title: '提交！', place: '', subtitle: '将您的订单上传到我们的工作室', id: 5 ,more:''},

    ])

    return (
        <div className="Better_CH">
            <Container fluid>
                <Row>
                    <Col sm={8}>
                        <div className="Image">
                            <img src={car} alt="car" />
                        </div>
                    </Col>
                    <Col sm={4}>
                        {blogs.map(blog => (
                            <div className="blog-preview" key={blog.id} >
                                <Link to={`/${blog.place}`}>
                                    <h2>{blog.title}</h2>
                                    <p>{blog.subtitle}</p>
                                    <p>{blog.more} </p>
                                </Link>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Better_CH;