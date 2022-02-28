import React, { FC } from "react";
import logo from "../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar: FC = (props) => {
  const links:string[]= ["<About/>","<AboutMe/>","<Contact/>","<Projects/>"]
  return (
    <nav className="w-[100vw] z-10 fixed h-12 top-0 bg-[#21325E] text-[#F0F0F0] flex justify-center items-center sm:justify-start">
      <div className="sm:mr-auto">
        <Image src={logo} height={50} width={100} />
      </div>
      <div className="hidden sm:flex px-4 space-x-5 ">
        <Link href="/">{links[0]}</Link>
        <Link href="/about">{links[1]}</Link>
        <Link href="/contact">{links[2]}</Link>
        <Link href="/projects">{links[3]}</Link>
      </div>
      <div className="fixed text-xs bottom-0 w-[100vw] h-12 bg-[#21325E] text-[#F0F0F0] flex space-x-4 justify-center items-center sm:hidden ">
        <Link href="/">{links[0]}</Link>
        <Link href="/about">{links[1]}</Link>
        <Link href="/contact">{links[2]}</Link>
        <Link href="/projects">{links[3]}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
