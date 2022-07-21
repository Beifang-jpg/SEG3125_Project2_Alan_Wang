import { useState } from "react";
import { Link } from "react-router-dom";

const Guide = () => {
    const [blogs, setBlogs] = useState([
        { title: '我想要中文引导', body: 'Guide_CH', subtitle: '点击开始', id: 1 },
        { title: 'I would like English guide', body: 'Guide_EN', subtitle: 'Click Here and Start', id: 2 },
    ])

    return (
        <div className="Book_homepage">
          {blogs.map(blog => (
            <div className="blog-preview" key={blog.id} >
              <h2>{ blog.title }</h2>
              <p>{ blog.subtitle }</p>
            </div>
          ))}
        </div>

      );
}
 
export default Guide;