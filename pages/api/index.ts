import type { NextApiRequest, NextApiResponse } from "next";
import { readFile, readFileSync } from "fs";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let data: object ;

  try {
    data =JSON.parse (readFileSync(`projectData/${req.query.slug}`, "utf-8"));
    console.log(data);
  } catch (err) {
    data = err
  }
  res.status(200).send(data);
}
