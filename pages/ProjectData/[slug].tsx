import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import * as fs from 'fs'

interface Projectdata {
  name: string;
  desc: string;
  slug: string;
  author?: string;
}
const demo = {
  name: "not given",
  desc: "not given",
  slug: "not given",
};

const Slug: NextPage = (props:any) => {
  const [project, setProject] = useState(demo)
  useEffect(() => {
    setProject(props.allPost)
  
    return () => {
    }
  }, [props])
  
  return (
    <div className="my-20">
      <div className="text-white m-8 p-8 ">
        <h3 className="text-4xl font-bold my-5">{project.name}</h3>
        {/* remember slug is lowercase  */}
        <p className="text-white">{project.desc}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: {slug:"project1.json" } },
      { params: {slug:"project2.json" } }
    ],
    fallback: true // false or 'blocking'
  };
}
export async function getStaticProps(context:any) {
  const {slug}= context.params

  
    const allPost:Object = JSON.parse(await fs.promises.readFile(`projectData/${slug}`, "utf-8"));

  // const allPost=await data.json()
  return {
    props: {allPost} // will be passed to the page component as props
  };
}
export default Slug;
