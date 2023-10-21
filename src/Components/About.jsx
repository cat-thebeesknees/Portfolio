import "../Styles/About.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Socials from "./Socials";

const About = () => {
  return (
    <>
      <div className="about-container">
        <h2 className="about-heading">About</h2>
      <Header />
      <Socials />
      <NavBar />
      </div>
    </>
  );
};

export default About;
