import type { NextApiRequest, NextApiResponse } from "next";
import { readdirSync, readFileSync } from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dirs = readdirSync("projectData");

  const data: Object[] = dirs.map((e) => {
    return JSON.parse(readFileSync("projectData/" + e, "utf-8"));
  });

  res.status(200).send(data);
}
