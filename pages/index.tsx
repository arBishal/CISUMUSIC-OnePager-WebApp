import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../public/images/logo.png";
import style from "./index.module.css";
import Upload from "../src/custom-components/upload";
import { Button } from "antd";
import { useEffect, useState } from "react";
import getGenre from "../public/images/mapping";
import swal from "sweetalert";

const Home: NextPage = () => {
  const [file, setFile] = useState<string>();

  const onClick = () => {
    const genre = getGenre(file as string);
    setTimeout(()=>{
      swal(`The music if from '${genre}' genere.`);
    }, 1000)
  };

  return (
    <div>
      <Head>
        <title>Cisumusic</title>
        <link rel="icon" href="/images/hlogo.png" />
      </Head>

      <div className={style.main}>
        <div className={style.image}>
          <Image
            src={logo}
            alt="Cisumusic Logo"
            height="52.2vh"
            width="336.6vh"
          />
        </div>
        <p>Upload a piece of music to find out the genre. Enjoy!</p>
        <Upload setFile={setFile} />
        <Button type="primary" style={{ margin: "20px" }} onClick={onClick}>
          Find the genre!
        </Button>
      </div>

      <footer className={style.footer}>
        <p>
          This web-app has been developed for academic purpose, as a machine
          learning project front-end.
        </p>
      </footer>
    </div>
  );
};

export default Home;
