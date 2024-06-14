import "../Styles/About.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Profile from "./Me";

const About = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="quote-container">
        <p className="personal-quote">
          &ldquo;When we seek to discover the best in others, we somehow bring
          out the best in ourselves.&rdquo;
          <br />
          William Arthur Ward
        </p>
      </div>
      <div className="photo-container">
        <Profile />
      </div>

      <div className="about-container">
        <p className="about-paragraph">
          Okay, let us just take a moment to acknowledge how uncomfortable it is
          to write an &ldquo;about me&rdquo; paragraph.
          <br />
          Okay, cool.
          <br />
          I&apos;ve often been described as possessing a magnetic personality,
          with a natural inclination to see the positive side of situations, and
          a firm belief in the inherent goodness of others.
          <br />
          My strengths lie in adaptability, dependability, and a strong
          commitment to integrity—values I take pride in upholding. I consider
          active listening a superpower, as it enables me to create an
          environment of trust and open communication. I specialize in providing
          uncritical acceptance, fostering an atmosphere where diverse
          perspectives are valued.
          <br />
          I believe true success is leveraging the collective knowledge of the team.
          Just imagine the possibilities that arise when we tap into
          the unfiltered wisdom of each team member. I am excited about the
          prospect of contributing to a collaborative and innovative work
          environment, where mutual respect and shared knowledge drive our success.
          <br />
        </p>
        <p className="hobbies-paragraph">
        <br />
         </p>
         <p className="code-paragraph">
          <br />
         </p>

      </div>
    </>
  );
};

export default About;
