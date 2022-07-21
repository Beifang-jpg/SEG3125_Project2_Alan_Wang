import { Link } from 'react-router-dom';
import { useState } from "react";

const Toronto = () => {
    // return ( 
    //     <div className="Toronto">
    //         <Link to={`/Contect`}>
    //         <h1>Toronto Studios / 多伦多的门店</h1>
    //         <h2>Click this back to contect/点击返回上一步</h2>


    //         <h3>Email:3125Studio_Toronto_En@gmail.com</h3>
    //         <h3>邮箱:3125Studio_Toronto_CH@gmail.com</h3>

    //         <h3>Call Us in English: 777-456-756</h3>
    //         <h3>中文客服: 777-453-889</h3>

    //         <h2>Studio1 / 一号工作室</h2>

    //         <h2>Studio2 / 二号工作室</h2>
    //         </Link>
    //     </div>
    //  );
    const [blogs, setBlogs] = useState([
        { title: 'Toronto Studios / 多伦多的门店', place: 'Contect', subtitle: 'you can go back by click here/点击此处返回上一步', id: 1 },
        { title: 'Studio One / 门店1', place: 'Toronto_one', subtitle: 'Click here learn more/点击了解', id: 2 },
        { title: 'Studio Two / 门店2', place: 'Toronto_two', subtitle: 'Click here learn more/点击了解', id: 3 },
      ])

    return ( 
        <div className="Toronto_info">

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
 
export default Toronto;