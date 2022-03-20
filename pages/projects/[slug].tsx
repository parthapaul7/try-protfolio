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
  function createMarkup(content:any) {
  return {__html: content};
}
  const router = useRouter();
  const [project, setProject] = useState<Projectdata>(demo);

  useEffect(() => {
    setProject(props.allPost)
  
    return () => {
    }
  }, [props])
  
  return (
    <div className="my-20">
      <div className="text-white m-8 p-8 ">
        <h3 className="text-4xl font-bold my-5">{project && project.name}</h3>
        {/* remember slug is lowercase  */}
        <p
          className="text-white"
          dangerouslySetInnerHTML={createMarkup(project.desc)}
        ></p>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { slug } = context.query;

  const data = await fetch(`http://localhost:3000/api?slug=${slug}`);
  const allPost = await data.json();
  return {
    props: { allPost }, // will be passed to the page component as props
  };
}
export default Slug;
