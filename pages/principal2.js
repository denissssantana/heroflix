import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import React from "react";
import Image from 'next/image';
import Slider from '../components/carousel'
import Slider2 from '../components/carousel2'
import Link from 'next/link'
import styles from '../styles/Principal2.module.css'




import { Carousel } from 'react-responsive-carousel';



export default function Principal() {

  const list1 = [
    { link: '/images/wakandaBanner.png', page: '/videos/pantera4.mp4' },
    
  ]

  const list2 = [
    { link: '/images/coringa.png', page: '/videos/coringa.mp4' },
    { link: '/images/invasaoSecreta.png', page: '/videos/invasaoSecreta.mp4' },
    { link: '/images/theBatman.png', page: '/videos/theBatman.mp4' },
    { link: '/images/thor4.png', page: '/videos/thor4.mp4' },
    { link: '/images/drEstranho2.png', page: '/videos/doutor2.mp4' },
  ] 
  
  return (
    <>
      <Head>
        <title>Principal</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.container}>
        <div>
          <Navbar/>
        </div>

        <div className={styles.mainContent1}>
        <div className={styles.mainContent1}>
          <Link href="/videos/adaoNegro.mp4">
              <Image
                src="/images/adaoBanner.png"
                width="3000"
                height="500"
                alt="banner" />
              </Link>
      </div>
        <Slider arquivos={list1} />
        </div>
      <div className={styles.mainContent2}>
        <Slider2 arquivos={list2} />
      </div>

        <div>
          <Footer/>
        </div>

      </div>
    </>
  )
}