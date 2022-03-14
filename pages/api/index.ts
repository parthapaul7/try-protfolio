import type { NextApiRequest, NextApiResponse } from "next";
import { readFile, readFileSync } from "fs";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  try {
    const data:Object = JSON.parse(readFileSync(`projectData/${req.query.slug}`, "utf-8"));
    console.log(data);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
}
