import type { NextApiRequest, NextApiResponse } from "next";
import React from "react"
import Image from "next/image"
import wave1 from "../../public/wave1.svg"

type Curves= {
    curve?: [string,string]
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Curves>
) {
res.status(200).send({
  curve:["he","hellow"]
}
 );
}
