import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from './img/Logo.png';

import { Container } from 'react-bootstrap';
import { Row, Col, Figure, Button, Image, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Community from "./Community";

const Fake_Community_CH = () => {

    const [blogs, setBlogs] = useState([
        { title: '我有个想法!', place: '发布者：汤米', subtitle: '我们可以搞事...', id: 1 },
        { title: '我发现了新大陆!', place: '发布者：阿莉克丝', subtitle: '我找到一个好玩东西...', id: 2 },
        { title: '找到一个新车!', place: '发布者：格利斯', subtitle: '我朋友的朋友的朋友...', id: 3 },
        { title: '没有人学过ITI1120之前?', place: '发布者：克里斯', subtitle: '学不动了 ...', id: 3 },
    ])
    return (
        <div className="Fake_Community_CH">
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

export default Fake_Community_CH;