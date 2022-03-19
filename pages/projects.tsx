import { GetServerSideProps, NextPage } from "next";
import Projects from "../components/Projects";
import { useEffect, useState } from "react";
import Link from "next/link";
import { readFileSync, readdirSync } from "fs";

const ProjectsPage: NextPage = (props: any) => {
  console.log(props);
  const [posts, setposts] = useState(props.allPost);

  return (
    <div className="my-20">
      {posts.map((e: any, i: number) => {
        console.log(e.desc);
        return (
<<<<<<< HEAD
          <div className="text-white m-8 p-8 cursor-pointer" key={i}>
            <h3 className="text-4xl font-bold">{e.name}</h3>
            <p  className="text-white">
              {e.desc.substring(0, 100)}{" "}
              <Link href={`/ProjectData/${e.slug}`}><span className="text-green-500">.....Read more....</span></Link>
            </p>
          </div>
=======
          <Link href={`/ProjectData/${e.slug}`}>
            <div className="text-white m-8 p-8 cursor-pointer">
              <h3 className="text-4xl font-bold">{e && e.name}</h3>
              <p key={i} className="text-white">
                {e.desc.substring(0, 100)} .........
              </p>
            </div>
          </Link>
>>>>>>> 227cf23ebbf9ff5ca7d15798ed45d49aa745db4c
        );
      })}
      ;
    </div>
  );
};

export async function getStaticProps() {
  const dir = readdirSync("projectData");

  const allPost: Object[] = dir.map((e) => {
    return JSON.parse(readFileSync("projectData/" + e, "utf-8"));
  });

  return {
    props: { allPost }, // will be passed to the page component as props
  };
}
export default ProjectsPage;
