import { useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'I need some guide through/我需要点引导', place: 'Guide', subtitle: 'Click Here and Start', id: 1 },
    { title: 'Thanks, just take me to booking/不用，带我去订车吧', place: 'Book_homepage', subtitle: 'Click to Book', id: 2 },
  ])

  return (
    <div className="home">

      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/${blog.place}`}>
          <h2>{ blog.title }</h2>
          <p>{ blog.subtitle }</p>
          </Link>
        </div>
      ))}

        <div>
        <div className="Image">
        <img src="/Logo.png" alt="" />
        </div>
        </div>
        </div>
  );
}
 
export default Home;