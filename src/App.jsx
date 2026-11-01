import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Training from "./components/Training";
import Education from "./components/Education";
import Projects from "./components/Projects";

import { profile } from "./data.js";

function App() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <NavBar />
      <main>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Training />
        <Education />
      </main>
      <footer className="footer">
        <div className="container">
          <p>
            <span className="copyright-symbol" aria-hidden="true">
              ©
            </span>{" "}
            {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
