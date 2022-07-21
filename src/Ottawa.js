import { Link } from 'react-router-dom';
import { useState } from "react";


const Ottawa = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Ottawa Studios / 渥太华的门店', place: 'Contect', subtitle: 'you can go back by click here/点击此处返回上一步', id: 1 },
        { title: 'Studio One / 门店1', place: 'Ottawa_one', subtitle: 'Click here learn more/点击了解', id: 2 },
        { title: 'Studio Two / 门店2', place: 'Ottawa_two', subtitle: 'Click here learn more/点击了解', id: 3 },
      ])

    return ( 
        <div className="Ottawa_info">

            {blogs.map(blog =>(
                <div className="blog-preview_contect" key={1}>
                    <Link to={`/${blog.place}`}>
                    <h1>{blog.title} </h1>
                    <p> {blog.subtitle} </p>
                    </Link>
                </div>
                
            ))}
        </div>
     );
}
 
export default Ottawa;