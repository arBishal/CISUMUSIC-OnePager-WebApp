// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};



// const cors = require("cors");
const { spawn } = require("child_process");



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const audioUrl: string = "/Users/magic-kiri/Desktop/blues.00000.wav";

  var str = "meow";
  let output: unknown;
  const python = spawn("/Users/magic-kiri/Desktop/Codes/CISUMUSIC/CISUMUSIC-OnePager-WebApp/.pyvenv/bin/python3", ["/Users/magic-kiri/Desktop/Codes/CISUMUSIC/CISUMUSIC-OnePager-WebApp/pyscripts/scripts.py", audioUrl]);
  python.stdout.on("data", (data: any) => {
    console.log("Piping data from python script...");
    console.log(data.toString());
    output = data.toString();
  });
  python.on("close", (code: string) => {
    console.log(`child process: close all stdio with code ${code}`);
  });

  res.status(200).json({ name: "John Doe" });
}
