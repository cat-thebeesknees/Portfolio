import NavBar from "./NavBar";
import Cartoon from "../Images/cartoonme.jpg";

import "../Styles/Home.css";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="home-container">
        <div className="wrapper">
          <div className="bg"> Catherine Hilton</div>

          <div className="fg"> Catherine Hilton </div>
        </div>

        <img id="cartoon-img" src={Cartoon} alt="Cartoon" />
      </div>
      <h3 className="home-subheading">Software Developer</h3>
      <p className="home-paragraph">
        &ldquo; Remember that when you take your first step into the life of
        your dreams, the first thing to meet you there will be fear.
        <br />
        Nod.
        <br />
        Keep walking.&rdquo;
      </p>
    </>
  );
};

export default Home;
