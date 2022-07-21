import { Link } from 'react-router-dom';
import { useState } from "react";

import { Container } from 'react-bootstrap';
import { Row, Col, Figure, Button, Image, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import com_pic from './img/com_pic.jpg';
const Community_EN = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Post Your Idea', mid: 'Share your inspiration', subtitle: 'or anything in your mind', id: 1 },
        { title: 'Hi, I am the content', mid: 'fun content', subtitle: 'anmd end', id: 2 },
        { title: 'All good? Push me to uploaded', mid: 'Click', subtitle: 'and check others', id: 2 },

    ])
    return (
        <div className="Community_EN">

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
                                <Link to={`/Fake_Community_EN`}>
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

export default Community_EN;