// Tell webpack this JS file uses this image
import Me from "../Images/me.jpg";
import Flowers from "../Images/flowers.jpg";
import yellow from "../Images/yellow.jpg";
// Import result is the URL of your image
import  "../Styles/Me.css";

console.log(Me);

function Profile() {
  // Import result is the URL of your image
  return (
    <>
<div className="gallery">
<span style={{'--i': 1}}>
  <img id="me-img" src={Me} alt="Me" />
  </span>
  <span style={{'--i': 2}}>
  <img id="flowers-img" src = {Flowers} alt="Flowers" />
  </span>
  <span style={{'--i': 3}}>
  <img id="yellow-img" src = {yellow} alt="yellow" />
  </span>
  <span style={{'--i': 4}}>
  <img id="me-img" src={Me} alt="Me" />
  </span>
  <span style={{'--i': 5}}>
  <img id="flowers-img" src = {Flowers} alt="Flowers" />
  </span>
    <span style={{'--i': 6}}>
  <img id="yellow-img" src = {yellow} alt="yellow" />
  </span>
    <span style={{'--i': 7}}>
  <img id="me-img" src={Me} alt="Me" />
  </span>
    <span style={{'--i': 8}}>
  <img id="flowers-img" src = {Flowers} alt="Flowers" />
  </span>
</div>






  

  

    


  </>
  );
}

export default Profile;