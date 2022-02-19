import React from 'react'
import './App.css';
import Projects from './Components/Projects';
import About from './Components/About';
import { Link, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <header className='navbar'>
        <div className="headerName">Robert Stott  <p className="headerTitle">Front-End Web Develeoper</p></div>
        <div className="linkWrapper">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About Me</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Projects/>} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}


export default App;
