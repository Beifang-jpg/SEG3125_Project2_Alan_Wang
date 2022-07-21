import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Row, Col, Figure, Button, Image, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Get_Start_EN = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Normal Customize ', place: 'Nromal_EN', subtitle: 'Book online and View it in 3D', id: 1 },
        { title: 'Haute Customize ', place: 'Better_EN', subtitle: 'Talk to our Staff to make your specail design', id: 2 },
        { title: 'Previous Page ', place: 'Book_homepage', subtitle: 'Back to language', id: 3 },
    ])


    return (
        <div className="Get_Start_EN">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/${blog.place}`}>
                        <h1>{blog.title} </h1>
                        <p> {blog.subtitle} </p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Get_Start_EN;