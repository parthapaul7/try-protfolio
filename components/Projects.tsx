import { NextPage } from 'next'
import ProjectCard from './ProjectCard';

interface ProjectProps{
  curve:[Object,Object];
}
const Projects:NextPage<ProjectProps> = (props) => {
  return (
    <div className='relative h-auto w-[100vw] overflow-hidden'>
      {props.curve[0]}
      {props.curve[1]} 
       <div className='mx-auto bg-yellow-500 rounded-md mt-20 w-[5em] px-2'> Projects </div>

      <ProjectCard/>
      <ProjectCard/>
    </div>

  )
}

export default Projects