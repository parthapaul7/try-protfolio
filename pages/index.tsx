import type { NextPage } from "next";
import Image from "next/image";
import Main from "./main";
import Projects from "./projects";

const Home: NextPage = () => {
  return (
    <div className="w-[100vw] h-auto m-0 p-0 ">
      <Main/>          
      <Projects/>
    </div>
  );
};

export default Home;
