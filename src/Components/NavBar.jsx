import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

const NavBar = () => {
  return (
    <>
      
        <nav id="navlinks">
          <ul id="navUl" style={{ listStyle: "none", padding: 5 }}>
            <div className="nav-link">
              <li id="home-li">
                <Link to="/" className="home-link">
                  Home
                </Link>
              </li>
            </div>
            <div className="nav-link">
              <li id="about-li">
                <Link to="/about" className="about-link">
                  About
                </Link>
              </li>
            </div>
            <div className="nav-link">
              <li id="projects-li">
                <Link to="/projects" className="projects-link">
                  Projects
                </Link>
              </li>
            </div>
            <div className="nav-link">
              <li id="contact-li">
                <Link to="/contact" className="contact-link">
                  Contact
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      
    </>
  );
};

export default NavBar;
