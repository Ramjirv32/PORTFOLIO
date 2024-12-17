import React from 'react';
import Home from './components/home.jsx'; 
import Navbar from './components/Header.jsx'; 
import Skills from './components/Skills.jsx'; 
import Projects from './components/Projects.jsx'; 
import Scroll from './components/scroll.jsx';
import Email from './components/Email.jsx';
import Certificates from './components/certificates.jsx';
 
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="App">
      <Scroll>
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="contact">
          <Email />
        </section>
      </Scroll>
    </div>
  );
}

export default App;