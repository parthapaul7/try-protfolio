import { GetServerSideProps, NextPage } from "next";
import Projects from "../../components/Projects";
import { useEffect, useState } from "react";
import Link from "next/link";
import { curve } from "../index";

const projects: NextPage = (props: any) => {
  console.log(props);
  const [posts, setposts] = useState(props.allPost);

  return (
    <div className="">
          <Projects curve={curve}/>
      {posts.map((e: any, i: number) => {
        console.log(e.desc);
        return (
          <>
            <Link href={`../projects/${e.slug}`}>
              <div className="text-white m-8 p-8 cursor-pointer">
                <h3 className="text-4xl font-bold">{e && e.name}</h3>
                <p key={i} className="text-white">
                  {e.desc.substring(0, 100)} .........
                </p>
              </div>
            </Link>
          </>
        );
      })}
      ;
    </div>
  );
};

export async function getServerSideProps() {
  const data = await fetch("http://localhost:3000/api/allProjects");
  const allPost = await data.json();
  return {
    props: { allPost }, // will be passed to the page component as props
  };
}
export default projects;
