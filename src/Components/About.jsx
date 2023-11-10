import "../Styles/About.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Profile from "./Me";


const About = () => {
  return (
    <>
      <div className="about-container">
        <h2 className="about-heading">About</h2>
      <Header />
      
      <NavBar />
      <Profile />
      <p className="personal-quote">
      &ldquo;When we seek to discover the best in others, we somehow bring out the best in ourselves.&rdquo;
      William Arthur Ward
      </p>

      <p className="about-paragraph">
      Okay, let us just take a moment to acknowledge how uncomfortable it is to write an &ldquo;about me&rdquo; paragraph.<br/>
       Now, what I often hear people say about me is that I am magnetic.<br />
       I naturally see the posititve side of things, and believe in the goodness of others.<br />
       I love when people feel comfortable sharing their perspectives, it&apos;s an opportunity to understand concepts and solutions I didn&apos;t consider.<br /> 
       Offering uncritical acceptance, leaves room to build trust and learn from one another.<br />
      Just imagine what can be accomplished when we have access to the unfiltered knowledge of everyone on the team.<br />
       I&apos;ve learned to better handle critisim. If it stings a bit to hear it, I know it&apos;s because there&apos;s truth to it.<br />
      
      </p>
      </div>
    </>
  );
};

export default About;
