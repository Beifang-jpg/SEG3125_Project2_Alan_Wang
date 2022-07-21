import { useState } from "react";
import { Link } from "react-router-dom";

const Guide = () => {
  const [blogs, setBlogs] = useState([
    { title: '我想要中文引导', place: 'Guide_CH', subtitle: '点击开始', id: 1 },
    { title: 'I would like English guide', place: 'Guide_EN', subtitle: 'Click Here and Start', id: 2 },
  ])

  return (
    <div className="Book_homepage">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/${blog.place}`}>
            <h2>{blog.title}</h2>
            <p>{blog.subtitle}</p>
          </Link>
        </div>
      ))}
    </div>

  );
}

export default Guide;