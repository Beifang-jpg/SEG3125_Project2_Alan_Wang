import { useState } from "react";
import { Link } from "react-router-dom";

const Get_Start_EN = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Normal Customize ', place: 'Nothing', subtitle: 'Book online and View it in 3D(later can click)', id: 1 },
        { title: 'Haute Customize ', place: 'Nothing', subtitle: 'Talk to our Staff to make your specail design(later can click)', id: 2 },
      ])


    return ( 
        <div className="Get_Start_EN">
            {blogs.map(blog =>(
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