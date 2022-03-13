import { NextPage } from "next";
import React from "react";
import Projects from "../components/Projects";
import { useEffect, useState } from "react";

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
          <div className="text-white">
            <h3>{e.name}</h3>
            <p key={i} className="text-white py-10">
              {e.desc}
            </p>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default projects;
