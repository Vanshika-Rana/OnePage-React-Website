import React from 'react';
import { ProjectContainer,ProjectHeading,ProjectWrapper,ProjectImageOne,ProjectImageTwo } from './LatestProjects.style';

import lp3 from "../assets/lp3.jpg"
import lp4 from "../assets/lp4.jpg"
import lp7 from "../assets/lp7.jpg"
import lp8 from "../assets/lp8.jpg"
function LatestProjects() {
  return (
      <ProjectContainer>
      <ProjectHeading>Latest Projects</ProjectHeading>

      <ProjectWrapper>
        <ProjectImageOne src={lp8}/>
        <ProjectImageTwo src={lp4}/>
      </ProjectWrapper>


      <ProjectWrapper>
        
        <ProjectImageOne src={lp7}/>
        <ProjectImageTwo src={lp3}/>
      
        
      </ProjectWrapper>

      
      
    </ProjectContainer>
  );
}

export default LatestProjects;