import mainlogo from "../public/mainlogo.svg";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";

interface CurveProps{
  curves:[Object,Object];
}

const Main:NextPage<CurveProps>= ({curves}) => {
  return (
    <main className="relative overflow-hidden h-[100vh] mt-7">
        {curves[0]}
      <div className="my-14 flex flex-col-reverse sm:flex-row">
        <div className="p-5 text-4xl text-white">
          Hi <br />
          Im Partha <br />
          Web Developer
        </div>
        <Image src={mainlogo} width={500} height={300} />
      </div>
      <div className="text-white flex justify-evenly">
        <div>
          <Link href="/about"> AboutMe</Link>
        </div>
        <div>
          <Link href="/contact"> Contact</Link>
        </div>
      </div>
     {curves[1]} 
    </main>
  );
};

export default Main;
