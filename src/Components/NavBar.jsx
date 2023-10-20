import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

const NavBar = () => {
  return (
    <> <div className="nav-container">
      <div className="nav-link">
        <Link to="/" className="home-link">Home</Link>
      </div>
      <div className="nav-link">
        <Link to="/about" className="about-link">About</Link>
      </div>
      <div className="nav-link">
        <Link to="/projects" className="projects-link">Projects</Link>
      </div>
      <div className="nav-link">
        <Link to="/contact" className="contact-link">Contact</Link>
      </div>
    
    </div>
    </>
  );
};

export default NavBar;
