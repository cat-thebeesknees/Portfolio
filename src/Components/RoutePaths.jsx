import { Routes, Route } from "react-router-dom"; 
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import NotFound from "./NotFound";
import "../Styles/RoutePaths.css";
const RoutePaths = () => {
  return (
  <>
  <div className="route-container">
<div id="route-section">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</div>

  </div>
  </>
  );  
};

export default RoutePaths;
