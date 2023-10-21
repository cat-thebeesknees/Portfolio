import NavBar from "./NavBar";
import Socials from "./Socials";

import "../Styles/Home.css";
import Header from "./Header";
import Profile from "./Me";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div id="logo-img">
          <Header />
        </div>
        <div id="socials-container">
          <Socials />
        </div>
        <div id="nav-container">
          <NavBar />
          <h1 className="home-heading">Catherine Hilton</h1>
          <Profile />

          <h3 className="home-subheading">Software Development Engineer</h3>
          <p className="home-paragraph">
            &ldquo; Remember that when you take your first step into the life of
            your dreams, the first thing to meet you there will be fear. Nod.
            Keep walking.&rdquo;
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
