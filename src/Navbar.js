import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>3125 Studio</h1>
        <div className="links">

        <Link to="/"><a style={{
            color: 'white', 
            backgroundColor: '#6689af',
            borderRadius: '10px' 
        }}>Front Page</a></Link>

        <Link to="Community" s><a tyle={{
            color: 'white', 
            backgroundColor: '#6689af',
            borderRadius: '10px' 
        }}>Community</a></Link>


        <Link to="SignOrCreate"><a style={{ 
            color: 'white', 
            backgroundColor: '#6689af',
            borderRadius: '10px' 
        }}>Sign in /Create Account</a></Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;
