import logo from "../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { NextComponentType, NextPage } from "next";
import { useState } from "react";

const Navbar:NextComponentType= () => {
  const links: string[] = [
    "<Home/>",
    "<AboutMe/>",
    "<Contact/>",
    "<Projects/>",
    "<Menu/>"
  ];
  const [overlay, setOverlay] = useState(false);

  const navOverlayBtn = overlay ? (
    <div onClick={()=>{setOverlay(!overlay)}} className="absolute h-[100vh] w-[100vw] top-[50px] flex flex-col space-y-10 items-center  bg-[#21325ef8] sm:hidden" >
      <br />
      <Link  href="/">{"<Home/>"}</Link>
      <Link href="/about">{links[1]}</Link>
      <Link href="/contact">{links[2]}</Link>
      <Link href="/projects">{links[3]}</Link>
    </div>
  ) : (
    <></>
  );
  return (
    <nav className=" font-robotoMono w-[100vw] z-10 fixed h-14 top-0 bg-[#21325E] text-[#F0F0F0] flex justify-center items-center sm:justify-start">
      <div className="mr-auto ml-2">
        {/* <Image src={logo} height={50} width={100} alt="small logo" /> */}
    <img src="logo.svg" alt="small logo" />
      </div>
      <div className="mr-6 sm:hidden" onClick={()=>{setOverlay(!overlay)}} >{links[4]}</div>
      <div className="hidden sm:flex px-4 space-x-8 justify-end mr-10" >
        <Link href="/">{links[0]}</Link>
        <Link href="/about">{links[1]}</Link>
        <Link href="/contact">{links[2]}</Link>
        <Link href="/projects">{links[3]}</Link>
      </div>
      {navOverlayBtn}
    </nav>
  );
};

export default Navbar;
