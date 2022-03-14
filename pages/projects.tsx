import { NextPage } from "next";
import React from "react";
import Projects from "../components/Projects";
import { useEffect, useState } from "react";
import Link from "next/link";

let projectData: object[] = [];
const projects: NextPage = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/allProjects")
      .then((e) => {
        console.log(e);
        return e.json();
      })
      .then((data) => {
        console.log(data);
        projectData = data;
        setposts(data);
      });

    return () => {};
  }, []);

  return (
    <div className="my-20">
      {posts.map((e: any, i) => {
        console.log(e.desc);
        return (
          <Link href={`/ProjectData/${e.slug}`}>
            <div className="text-white m-8 p-8 cursor-pointer">
              <h3 className="text-4xl font-bold">{e.name}</h3>
              <p key={i} className="text-white">
                {e.desc.substring(0, 100)} .........
              </p>
            </div>
          </Link>
        );
      })}
      ;
    </div>
  );
};

export default projects;
