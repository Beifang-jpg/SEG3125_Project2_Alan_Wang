import { useState } from "react";

const SignOrCreate = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Sign In', body: 'nothing', subtitle: 'Sign In(later can click)', id: 1 },
        { title: 'Create Account', body: 'nothing', subtitle: 'Create Account(later can click)', id: 2 },
      ])


    return ( 
        <div className="SignOrCreate">
            {blogs.map(blog =>(
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title} </h1>
                    <p> {blog.subtitle} </p>
                </div>
            ))}
        </div>
     );
}
 
export default SignOrCreate;