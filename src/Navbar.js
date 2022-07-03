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

        <Link to="Community" ><a style={{
            color: 'white', 
            backgroundColor: '#6689af',
            borderRadius: '10px' 
        }}>Community</a></Link>

        <Link to="SignOrCreate"><a style={{ 
            color: 'white', 
            backgroundColor: '#6689af',
            borderRadius: '10px' 
        }}>Sign in /Create Account</a></Link>

        <Link to="Get_Start"><a style={{ 
            color: 'white', 
            backgroundColor: '#6689af',
            borderRadius: '10px' 
        }}>Get Start</a></Link>  

        <Link to="contect"><a style={{ 
            color: 'white', 
            backgroundColor: '#6689af',
            borderRadius: '10px' 
        }}>Contect Us</a></Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;
