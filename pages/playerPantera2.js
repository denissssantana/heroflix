import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/Player.module.css'

export default function Principal() {
  return (
    <>
      <Head>
        <title>Player</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <div className={styles.container}>
      <div>
        <Navbar/>
      </div>

      <div className={styles.mainContent}>

        <main className={styles.main}>
            <video
              src="/videos/adaoNegro.mp4" width="850"
              autoPlay 
              controls
              preload >
            </video>          
        </main>
</div>
        <div className={styles.footer}>
          <Footer/>
        </div>    

    </div>
    </>
  )
}