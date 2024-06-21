import Header from "./Header";

import NavBar from "./NavBar";
import "../Styles/Projects.css";
import react from "../assets/react.png";
import mcj from "../assets/mcj.png";
import paint from "../assets/paint.png";
import list from "../assets/list.png";
import first from "../assets/first.png";
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
          <li id="language-icon-item">
            <i className="devicon-github-original-wordmark"></i>
          </li>
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
          <li id="language-icon-item">
            <i className="devicon-threejs-original-wordmark"></i>
          </li>
        </ul>
      </div>
      Projects
      <p>
        A simple website created for the purpose of learning how to use React
        Router
      </p>
      <a href="https://cat-react-router.netlify.app/">
        <img src={react} alt="react" />
      </a>
      <a href="https://cats-strangers-things.netlify.app/">
        <img src={mcj} alt="mcj" />
      </a>
      <a href="https://color-picker-cat.netlify.app/">
        <img src={paint} alt="paint" />
      </a>
      <a href="https://cat-contact-list.netlify.app">
      <img src={list} alt="list" />
      </a>
      <a href="https://puppy-pals-cat.netlify.app/">
        <img src={first} alt="first" />
      </a>
    </>
  );
};

export default Projects;
