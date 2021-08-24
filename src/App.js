import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './conponents/navbar/Navbar.jsx';
import Menu from './conponents/menu/Menu'
import Intro from './conponents/intro/Intro';
import Skills from './conponents/skills/Skills';
import Experience from './conponents/experience/Experience';
import Social from './conponents/social/Social';
import Preloader from './conponents/preloader/Preloader';
import Contact from './conponents/contact/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 5000);

  }, [])

  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Social menuOpen={menuOpen}/>
      {loading && <Preloader/>}
      <div className={"sections " + (menuOpen && "sectionsBW")}>
        <Intro setMenuOpen={setMenuOpen}/>
        <Skills setMenuOpen={setMenuOpen}/>
        <Experience setMenuOpen={setMenuOpen}/>
        <Contact setMenuOpen={setMenuOpen}/>
      </div>
    </div>
  );
}

export default App;
