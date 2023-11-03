import "../Styles/Contact.css";
import Header from "./Header";
import NavBar from "./NavBar";

const Contact = () => {
  return (
    <>
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
    <Header />
    
    <NavBar />

    <form>      
  <input name="name" type="text" className="feedback-input" placeholder="Name" />   
  <input name="email" type="text" className="feedback-input" placeholder="Email" />
  <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="SUBMIT"/>
</form>
    </div>
  </>
  );
};

export default Contact;
