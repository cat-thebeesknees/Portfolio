import NavBar from "./NavBar";
import Socials from "./Socials";

import "../Styles/Home.css";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div className="home-container">
        Home
        <div id="logo-img">
        <Header />
         
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
