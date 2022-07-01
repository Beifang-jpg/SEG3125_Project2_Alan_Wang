const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>3125 Studio</h1>
        <div className="links">

        <a href="/" style={{
            color: 'white', 
            backgroundColor: '#6689af',
            borderRadius: '10px' 
        }}>Front Page</a>

        <a href="/Community" style={{
            color: 'white', 
            backgroundColor: '#6689af',
            borderRadius: '10px' 
        }}>Community</a>


        <a href="/SignOrCreate" style={{ 
            color: 'white', 
            backgroundColor: '#6689af',
            borderRadius: '10px' 
        }}>Sign in /Create Account</a>
        </div>
      </nav>
    );
  }
   
  export default Navbar;