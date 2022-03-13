import type { NextApiRequest, NextApiResponse } from "next";

type Curves= {
    curve?: [string,string]
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Curves>
) {
  console.log(res);
res.status(200).send({
  curve:["he","hellow"]
}
 );
}
