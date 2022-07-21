import { useState } from "react";
import { Link } from "react-router-dom";

const Book_homepage = () => {

    const [blogs, setBlogs] = useState([
        { title: '我选择中文服务', place: 'Get_Start_CH', subtitle: '点击开始', id: 1 },
        { title: 'I would like English Service', place: 'Get_Start_EN', subtitle: 'Click Here and Start', id: 2 },
    ])

    return (
        <div className="Book_homepage">
          {blogs.map(blog => (
            <div className="blog-preview" key={blog.id} >
                <Link to={`/${blog.place}`}>
                <h1>{blog.title} </h1>
                <p> {blog.subtitle} </p>
                </Link>
            </div>
          ))}
        </div>

      );

     
}
 
export default Book_homepage;