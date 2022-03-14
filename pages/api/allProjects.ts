import type { NextApiRequest, NextApiResponse } from "next";
import { readdirSync, readFileSync } from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dir = readdirSync("projectData");

  const data: Object[] = dir.map((e) => {
    return JSON.parse(readFileSync("projectData/" + e, "utf-8"));
  });

  res.status(200).send(data);
}
