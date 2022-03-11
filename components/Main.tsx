import mainlogo from "../public/mainlogo.svg";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";

interface CurveProps{
  curves:[Object,Object];
}



const Main:NextPage<CurveProps>= ({curves},props) => {
 
  return (
    <main className="relative overflow-hidden h-[100vh] mt-7 font-robotoMono">
        {curves[0]}
        {console.log(props.curves)}
      <div className="mt-12 mb-4 flex flex-col-reverse sm:flex-row">
        <div className="px-10 text-3xl text-white mx-auto sm:w-[50vw] md:text-7xl">
          Hi <br />
          Im Partha <br />
          Web Developer
        </div>
        <Image src={mainlogo} layout="intrinsic" />
      </div>
      <div className="text-white flex justify-evenly">
        <div className=" rounded-xl bg-[#3e497ad7] px-2 py-1 ">
          <Link href="/about"> AboutMe</Link>
        </div>
        <div className="rounded-xl bg-[#3e497ad7] px-2 py-1">
          <Link href="/contact"> Contact</Link>
        </div>
      </div>
     {curves[1]} 
    </main>
  );
};


export default Main;