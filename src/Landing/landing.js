
import './index.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src="./assets/logo.jpg" alt="Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Products</a></li>
          <li><a href="#services">The Team</a></li>
          <li><ago href="#contact">About Us</ago></li>
        </ul>
      </nav>
      <div className="landing">
        <p className='welcome'>SUUBI is what your SACCO needs <br/>
          to move to the next level.  <br/>
          Automate your SACCO now!</p>
      <button className=''>Get Started</button>
              </div>
            
      </>
  )
  };

export default Navbar;
