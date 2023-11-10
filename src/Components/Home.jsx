import NavBar from "./NavBar";


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

       
        
      
        <h3 className="home-subheading">Software Development Engineer</h3>
        <p className="home-paragraph">
          &ldquo; Remember that when you take your first step into the life of
          your dreams, the first thing to meet you there will be fear. Nod. Keep
          walking.&rdquo;
        </p>
      </div>
    </>
  );
};

export default Home;
