import React from 'react';
import Home from './components/home.jsx'; 
import Header from './components/Header.jsx'; 
import Skills from './components/Skills.jsx'; 
import Projects from './components/Projects.jsx'; 
import Scroll from './components/scroll.jsx';
import Email from './components/Email.jsx';
 
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="App">
      <Scroll>
        <Header />
        <section id="home">
          <Home />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="email">
          <Email />
        </section>
      </Scroll>
    </div>
  );
}

export default App;