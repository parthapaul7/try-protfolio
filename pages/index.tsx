import type { NextPage } from "next";
import Image from "next/image";
import Main from "../components/Main";
import Projects from "../components/Projects";
import wave1 from "../public/wave1.svg";
import wave2 from "../public/wave2.svg";
import Head from "next/head";

const topCurve = (
  <div className="absolute m-0 p-0 border-0 -z-10 left-0 -top-2 w-[100vw] sm:-top-12 md:-top-40 xl:-top-56 ">
    {/* <Image src={wave1} layout="responsive" alt="wave1"/> */}
    <img src="wave1.svg" alt="wave1" width={2600} />
  </div>
);
const btmCurve = (
  <div className="absolute -z-10  -left-0 -bottom-2 w-[100vw] sm:-bottom- md:-bottom-28 xl:-bottom-48">
    {/* <Image src={wave2} layout="responsive" alt="wave2" /> */}
    <img src="wave2.svg" alt="wave2" width={2600} />
  </div>
);

const Home: NextPage = () => {
  return (
    <div className="w-[100vw] h-auto m-0 p-0 ">
      <Head>
        <title>Partha Paul</title>
      </Head>
      <Main curves={[topCurve, btmCurve]} />
      <Projects curve={[topCurve, btmCurve]} />
    </div>
  );
};

export default Home;
