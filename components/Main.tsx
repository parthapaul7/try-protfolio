import mainlogo from "../public/mainlogo.svg";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";

interface CurveProps {
  curves: [Object, Object];
}

const Main: NextPage<CurveProps> = ({ curves }, props) => {
  return (
    <main className="relative overflow-hidden h-[100vh] mt-7 font-robotoMono">
      {curves[0]}
      {console.log(props.curves)}
      <div className="mt-20 mb-0 flex flex-col-reverse sm:flex-row">
        <div className=" text-3xl text-white mx-auto sm:w-[60vw] sm:ml-28 sm:text-4xl  md:text-7xl md:my-auto">
          <div>
            <div>Hi </div>
            <div className="">I'm Partha </div>
           <div> Web Developer</div>
          </div>
          <div className="text-base mt-10 flex justify-between sm:space-x-10 sm:justify-start">
            <div className=" rounded-md  px-4 pt-2 text-black bg-yellow-500 font-bold ">
              <Link href="/about">{"<AboutMe/>"}</Link>
            </div>
            <div className="rounded-xl  px-4 py-1 text-yellow-500 border-[2px] border-yellow-400 font-bold">
              <Link href="/contact">{"<Contact/>"}</Link>
            </div>
          </div>
        </div>
        {/* <Image src={mainlogo} layout="intrinsic" alt="main-logo"/> */}
        <img src="mainlogo.svg" alt="main logo" />
      </div>

      {curves[1]}
    </main>
  );
};

export default Main;
