import NavBar from "./NavBar";
import Socials from "./Socials";
import "../Styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        Home
        <div id="logo-img">
          <img src="logo.png" alt="logo-img" width="210" height="180"></img>
        </div>
        <div id="socials-container">
          <Socials />
        </div>
        <div id="nav-container">
          <NavBar />
        </div>
      </div>
    </>
  );
};

export default Home;
