import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

const ParallaxComp = () => {
  const pRef = useRef<any>(null);

  return (
    <div>
      <Parallax pages={4} ref={pRef}>
        <ParallaxLayer offset={0}>
          <div className="w-full h-[100vh]"> othere thisng</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          sticky={{ start: 1, end: 2 }}
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => {
            console.log(pRef);
            pRef.current.scrollTo(3);
          }}
        >
          <div className="w-[100px] h-52 bg-red-400 ml-10 mt-60">left side</div>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <div
            className="h-[50vh] bg-black mt-[50vh] ml-[50%]"
            onClick={() => {
              console.log(pRef);
              pRef.current.scrollTo(3);
            }}
          >
            1
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <div className="h-[50vh] ml-[50%]">4</div>
          <div className="h-[50vh] bg-red-50 ml-[50%]">5</div>
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <div className="h-[100vh] w-[100vw] text-white">
            some othere stiffs
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4}>
          <div className="h-[100vh] w-[100vw] text-white">
            some othere stiffs
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxComp;
