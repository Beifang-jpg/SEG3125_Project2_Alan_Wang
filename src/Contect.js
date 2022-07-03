import { useState } from "react";

const Contect = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Ottawa', body: 'Somthing in Ottawa', subtitle: 'In Ottawa(later can click)', id: 1 },
        { title: 'Toronto', body: 'Somthing in Toronto', subtitle: 'In Toronto(later can click)', id: 2 },
        { title: 'Montreal', body: 'Somthing in Montreal', subtitle: 'In Montreal(later can click)', id: 3 },
      ])


    return ( 
        <div className="Infor">
            {blogs.map(blog =>(
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title} </h1>
                    <p> {blog.subtitle} </p>
                </div>
            ))}
        </div>
     );
}
 
export default Contect;