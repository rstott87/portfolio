// import binomialsImage from './binomials_project.png'
import React from 'react'



function ProjectsCard (props) {
    return (
        <div className="gridItem">
          <a href={props.link}><img src={props.img} alt="demo"/></a>
          <p className='cardTitle'>{props.title}</p>
          <p className='cardDescription'>{props.description}</p>
        </div>
        
    )
}

export default ProjectsCard