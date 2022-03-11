import { NextPage } from 'next'
import ProjectCard from './ProjectCard';

interface ProjectProps{
  curve:[Object,Object];
}
const Projects:NextPage<ProjectProps> = (props) => {
  return (
    <div className='relative h-[100vh] w-[100vw] overflow-hidden'>
      {props.curve[0]}
      {props.curve[1]} 
      <ProjectCard/>
      <ProjectCard/>
    </div>

  )
}

export default Projects