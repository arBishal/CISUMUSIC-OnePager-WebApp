import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/images/logo.png'
import style from './index.module.css'

const Home: NextPage = () => {
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
        
      </div>

      <footer className={style.footer}>
        <p>
          This web-app has been developed for academic purpose, as a machine learning project front-end.
        </p>
      </footer>
    </div>
  )
}

export default Home
