import { NextPage } from 'next'

interface ProjectProps{
  curve:[Object,Object];
}
const Projects:NextPage<ProjectProps> = (props) => {
  return (
    <div className='relative h-[100vh] w-[100vw] overflow-hidden'>
      {props.curve[0]}
    
    </div>

  )
}

export default Projects