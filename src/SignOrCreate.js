import { useState } from "react";
import { Link } from "react-router-dom";

const SignOrCreate = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Sign In/登录', go_to: 'Sign_in', subtitle: 'Already have an account?', id: 1 },
        { title: 'Create Account/注册', go_to: 'create_A', subtitle: 'Create Account with few steps', id: 2 },
      ])


    return ( 
        <div className="SignOrCreate">
            {blogs.map(blog =>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/${blog.go_to}`}>
                    <h1>{blog.title} </h1>
                    <p> {blog.subtitle} </p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default SignOrCreate;