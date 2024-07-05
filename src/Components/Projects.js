import React from 'react';
import ProjectBox from './ProjectBox';
var arr = [1,2,3,4,5,6,7,8,9,10,11,12];
const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Portofolio</b></h1>
      <div className='project'>
        {
          arr.map(val => <ProjectBox projectPhoto={require(`../images/${val}.jpg`)} type = {val-1} />)
        }
      </div>
    </div>
  )
}

export default Projects