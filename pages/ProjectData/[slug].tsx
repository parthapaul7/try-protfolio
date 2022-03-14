import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";

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

const Slug: NextPage = (props) => {
  const router = useRouter();
  const [project, setProject] = useState<Projectdata>(props.allPost);

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


export async function getServerSideProps(context:any) {
  const {slug}= context.query

  const data=await fetch(`http://localhost:3000/api?slug=${slug}`)
  const allPost=await data.json()
  return {
    props: {allPost} // will be passed to the page component as props
  };
}
export default Slug;
