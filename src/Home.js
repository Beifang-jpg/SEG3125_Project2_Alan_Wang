import { useState } from "react";


const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Guide Through', body: 'This will lead to Guide page', subtitle: 'Click Here and Start', id: 1 },
    { title: 'Not the First time', body: 'This will lead to Booking page', subtitle: 'Click to Book', id: 2 },
  ])

  return (
    <div className="home">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>{ blog.subtitle }</p>
        </div>
      ))}

      <div>
        <div className="Image">
        <img src="Logo.png" alt="" />
        </div>
      </div>
      {/* <img src="Logo.png" alt="" /> */}
    </div>
  );
}
 
export default Home;