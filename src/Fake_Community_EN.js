import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from './img/Logo.png';

import { Container } from 'react-bootstrap';
import { Row, Col, Figure, Button, Image, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Community from "./Community";

const Fake_Community_EN = () => {

    const [blogs, setBlogs] = useState([
        { title: 'I have an idea!', place: 'posted by Tommy', subtitle: 'we can do somthing something...', id: 1 },
        { title: 'I found something new!', place: 'posted by Alex', subtitle: 'I found something that is very great...', id: 2 },
        { title: 'I found a gooood car!', place: 'posted by Grace', subtitle: 'It is a car of a friend of my friend...', id: 3 },
        { title: 'Have anyone taken ITI1120 before?', place: 'posted by Kris', subtitle: 'I am in Azizs class and should I drop ...', id: 3 },
    ])
    return (
        <div className="Fake_Community_EN">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/Community`}>
                        <h1>{blog.title} </h1>
                        <p> {blog.place} </p>
                        <p> {blog.subtitle} </p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Fake_Community_EN;