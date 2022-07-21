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
        }}>Front Page/首页</a></Link>

        <Link to="Community" ><a style={{
            color: 'white', 
            backgroundColor: '#6689af',
            borderRadius: '10px' 
        }}>Community/社区</a></Link>

        <Link to="SignOrCreate"><a style={{ 
            color: 'white', 
            backgroundColor: '#6689af',
            borderRadius: '10px' 
        }}>Sign in or Create Account/登入或注册</a></Link>

        <Link to="Get_Start_EN"><a style={{ 
            color: 'white', 
            backgroundColor: '#6689af',
            borderRadius: '10px' 
        }}>Get Start/要改</a></Link>  

        <Link to="contect"><a style={{ 
            color: 'white', 
            backgroundColor: '#6689af',
            borderRadius: '10px' 
        }}>Contect Us/找到我们</a></Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;
