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

const Slug: NextPage = () => {
  function createMarkup(content) {
  return {__html: content};
}
  const router = useRouter();
  const [project, setProject] = useState<Projectdata>(demo);

  useEffect(() => {
    if (!router.isReady) return;
    fetch(`http://localhost:3000/api?slug=${router.query.slug}`)
      .then((e) => {
        console.log(e);
        return e.json();
      })
      .then((data) => {
        console.log(data);
        setProject(data);
      })
      .catch((err) => {
        setProject(err);
      });
    return () => {};
  }, [router.isReady]);

  return (
    <div className="my-20">
      <div className="text-white m-8 p-8 ">
        <h3 className="text-4xl font-bold my-5">{project && project.name}</h3>
        {/* remember slug is lowercase  */}
        <p className="text-white" dangerouslySetInnerHTML={createMarkup(project.desc)}></p>
      </div>
    </div>
  );
};

export default Slug;
