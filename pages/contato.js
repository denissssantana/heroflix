import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/Contato.module.css'

export default function Sobre() {
    return (
        <div>
            <Head>
                <title>Contatos</title>
 
            </Head>
            <div className={styles.container}>
                <header className={styles.header}>
                    <Navbar/>
                </header>
                <div className={styles.mainContent}>
                <main className={styles.main}>
                    
                        
                        <a href="https://github.com/denissssantana">
                            <Image 
                            src="/images/github.png" 
                            width="200" 
                            height="200" 
                            alt="brasão"
                            href="/"/>
                        </a>
                        <a href="//www.linkedin.com/in/dênis-santana-169b5659">
                        <Image 
                            src="/images/linkedin.png" 
                            width="150" 
                            height="150" 
                            alt="brasão"
                            href="/"/>
                        </a>
                                                            
                    
                </main>
                </div>
                <footer className={styles.footer}>
                    <Footer/>
                </footer> 
            </div>      
        </div>
    )
}