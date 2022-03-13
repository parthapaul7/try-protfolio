import { NextPage } from "next";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

interface ProjectProps {
  curve: [Object, Object];
}
const Projects: NextPage<ProjectProps> = (props) => {
  return (
    <div className="relative h-auto w-[100vw] overflow-hidden">
      {props.curve[0]}
      {props.curve[1]}
      <div className="mx-auto bg-yellow-500 rounded-md mt-20 w-[5em] px-2">
        Projects
      </div>

      <ProjectCard />
      <ProjectCard />
      <div className="rounded-xl bg-[#3e497ad7] px-2 py-1 mx-auto w-fit text-white">
        <Link href="/projects"> Show More</Link>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Projects;
