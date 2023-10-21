import logo from "../Images/logo.png"; // Tell webpack this JS file uses this image
import "../Styles/Header.css";
console.log(logo);

function Header() {
  // Import result is the URL of your image
  return <img id="logo-img" src={logo} alt="Logo" width={210} height={180} />;
}

export default Header;
