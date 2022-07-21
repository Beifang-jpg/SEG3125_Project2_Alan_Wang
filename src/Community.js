import { useState } from "react";
import { Link } from "react-router-dom";

const Community = () => {
  const [blogs, setBlogs] = useState([
    { title: '我想发中文内容', place: 'Community_CH', subtitle: '我们会把您发布的内容同步翻译成英文', id: 1 },
    { title: 'I would like post in English', place: 'Community_EN', subtitle: 'We will translate your post in Chinese also', id: 2 },
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

export default Community;