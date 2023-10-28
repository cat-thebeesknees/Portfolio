import Header from "./Header";

import NavBar from "./NavBar";
import "../Styles/Projects.css";

const Projects = () => {
  return (
    <>
    <Header />
    
    <NavBar />
    <h2 id="language-heading">Tech Stack</h2>
      <div className="projects-container">
        
        <ul id="language-icon">
          
          <li id="language-icon-item">
            <i className="devicon-babel-plain colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-bootstrap-plain-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-eslint-original-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-express-original-wordmark"></i>
          </li>
          <li id="language-icon-item"><i className="devicon-github-original-wordmark"></i></li>
          <li id="language-icon-item">
            <i className="devicon-git-plain-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-html5-plain-wordmark"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-jasmine-plain colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-javascript-plain colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-jquery-plain-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
          <i className="devicon-linux-plain"></i>
          </li>
          <li id="language-icon-item">
          <i className="devicon-markdown-original"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-nextjs-original-wordmark"></i>
          </li>
          <li id="language-icon-item">
          <i className="devicon-nodejs-plain"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-npm-original-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-oracle-original colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-postgresql-plain-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-react-original-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-ssh-original-wordmark"></i>
          </li>
          <li id="language-icon-item">
          <i className="devicon-tailwindcss-plain colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-ubuntu-plain-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-vuejs-plain-wordmark"></i>
          </li>
          <li id="language-icon-item">
          <i className="devicon-visualstudio-plain colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-vscode-plain-wordmark colored"></i>
          </li>
          <li id="language-icon-item">
            <i className="devicon-webpack-plain colored"></i>
          </li>
          <li id="language-icon-item"><i className="devicon-threejs-original-wordmark"></i></li>
         
        </ul>
      </div>
      Projects
    </>
  );
};

export default Projects;
