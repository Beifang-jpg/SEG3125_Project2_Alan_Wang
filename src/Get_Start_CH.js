import { useState } from "react";
import { Link } from "react-router-dom";


const Get_Start_CH = () => {
    const [blogs, setBlogs] = useState([
        { title: '普通定制 ', place: 'Normal_CH', subtitle: '使用我们的3D软件设计您的改装计划', id: 1 },
        { title: '高级定制 ', place: 'Nothing', subtitle: '与我们的客服进行私人定制吧', id: 2 },
        { title: '上一步 ', place: 'Book_homepage', subtitle: '返回上一页', id: 3 },
    ])


    return (
        <div className="Get_Start_CH">
            {blogs.map(blog => (
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

export default Get_Start_CH;