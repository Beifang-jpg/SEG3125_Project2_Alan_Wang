import { useState } from "react";

const Get_Start = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Normal Customize ', body: 'Nothing', subtitle: 'Book online and View it in 3D(later can click)', id: 1 },
        { title: 'Haute Customize ', body: 'Nothing', subtitle: 'Talk to our Staff to make your specail design(later can click)', id: 2 },
      ])


    return ( 
        <div className="Get_Start">
            {blogs.map(blog =>(
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title} </h1>
                    <p> {blog.subtitle} </p>
                </div>
            ))}
        </div>
     );
}
 
export default Get_Start;