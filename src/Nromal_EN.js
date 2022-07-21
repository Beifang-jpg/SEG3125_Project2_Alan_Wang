import { useState } from "react";
import { Link } from "react-router-dom";
import car from './img/car.jpg';
import { Container } from 'react-bootstrap';
import { Row, Col, Figure, Button, Image, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nromal_EN = () => {
    const [blogs, setBlogs] = useState([
        { title: 'You can adjust the parameters using the tools below', place: 'Get_Start_EN', subtitle: 'Or click here to return', id: 1 ,more:''},
        { title: 'Vehicle color', place: 'Nromal_EN', subtitle: 'Adjust', id: 2 ,more:'Grind arenaceous'},
        { title: 'Body details', place: 'Nromal_EN', subtitle: 'Adjust', id: 3 ,more:'Another Angle'},
        { title: 'Internal details', place: 'Nromal_EN', subtitle: 'Chassis', id: 4 ,more:'Engine'},
        { title: 'Tire', place: 'Nromal_EN', subtitle: 'Wheel hub', id: 5 ,more:'The material'},
        { title: 'The interior', place: 'Nromal_EN', subtitle: 'Leather material', id: 5 ,more:'Others'},
        { title: 'You have more inspiration?', place: 'Nromal_EN', subtitle: 'Become our premium member', id: 4 ,more:''},
        { title: 'Submit Your Order!', place: '', subtitle: 'We will get your order shortly', id: 4 ,more:''},
    ])

    return (
        <div className="Nromal_EN">
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

export default Nromal_EN;