import React from 'react'
import ProjectsCard from './ProjectsCard'
import binomialsImage from '../binomials_project_image.png'
import lossGainsImage from '../loss-gains.png'
import campaignWebsiteImage from "../campaign_website.png";

function Projects (props) {
    return (
      <div className="mainGrid">
        <ProjectsCard
          title="Foley Campaign Website"
          description="Official campaign website for the Campaign to Elect Dave Foley as SEIU Local 509 President"
          link="https://foley-campaign.vercel.app/"
          img={campaignWebsiteImage}
        />
        <ProjectsCard
          title="Binomial Caclulator"
          description="Simple rectangle area demonstration of multiplying polynomials"
          link="https://binomials.vercel.app/"
          img={binomialsImage}
        />
        <ProjectsCard
          title="Investment Loss Calculator"
          description="Simple visual demonstration that shows the gains and time needed to recoup a loss"
          link="https://losses-and-gains.vercel.app/"
          img={lossGainsImage}
        />
      </div>
    );
}

export default Projects