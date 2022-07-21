import { useState } from "react";
import { Link } from 'react-router-dom';

const Contect = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Ottawa/渥太华', place: 'Ottawa', subtitle: 'Two Studio Now / 两家门店', id: 1 },
        { title: 'Toronto/多伦多', place: 'Toronto', subtitle: 'Two Studio Now / 两家门店', id: 2 },
        { title: 'Montreal/蒙特利尔', place: 'Montreal', subtitle: 'One Studio Now / 一家门店', id: 3 },
      ])


    return ( 
        <div className="Infor">
            {blogs.map(blog =>(
                <div className="blog-preview_contect" key={blog.id}>
                    <Link to={`/${blog.place}`}>
                    <h1>{blog.title} </h1>
                    <p> {blog.subtitle} </p>
                    </Link>
                </div>
                
            ))}
        </div>
     );
     
}
 
export default Contect;