import 'bootstrap/dist/css/bootstrap.min.css';
import binomialsImage from './binomials_project.png'
import lossGainsImage from './loss-gains.png'
import React from 'react'
import './App.css';
import ProjectsCard from './Components/ProjectsCard';

function App() {
  return (
    <div>
      <header>
        <div className="headerName">Robert Stott  <p className="headerTitle">Front-End Web Develeoper</p></div>
      </header>
      <div className='title'>
        <h3>Projects</h3>
      </div> 
      <div className="outerGrid">
        <div className="App">
          <ProjectsCard 
            title="Binomial Caclulator"
            description="Simple rectangle area demonstration of multiplying polynomials" 
            link="https://binomials.vercel.app/" 
            img={binomialsImage}
            />
          <ProjectsCard 
            title="Investment Loss Calculator"
            description="Simple visual demonstration that shows the gains and time needed to recoup a loss" 
            link="https://binomials.vercel.app/" 
            img={lossGainsImage}
            />
          <div className="gridItem">Grid Item 3</div>
          <div className="gridItem">Grid Item 4</div>
          <div className="gridItem">Grid Item 5</div>
          <div className="gridItem">Grid Item 6</div>
        </div>
     </div>
    </div>
  )
}


export default App;
