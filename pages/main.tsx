import mainlogo from "../public/mainlogo.svg";
import wave1 from "../public/wave1.svg";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";
import wave2 from "../public/wave2.svg";

const Main: NextPage = () => {
  return (
    <main className="relative overflow-hidden h-[100vh]">
      <div className="absolute m-0 p-0 border-0 -z-10 left-0 top-2 w-[100vw] sm:-top-12 md:-top-40 xl:-top-56 ">
        <Image src={wave1} layout="responsive" />
      </div>
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
      <div className="absolute -z-10 h-[20vh] -left-0 bottom-0 w-[100vw] sm:-bottom-0 md:-bottom-0 xl:-bottom-0">
        <Image src={wave2} layout="responsive" />
      </div>
    </main>
  );
};

export default Main;
