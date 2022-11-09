import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/Sobre.module.css'

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
                <main className={styles.main}>
                    <div className={styles.texto}>
                      
                    </div>
                </main>

                <footer className={styles.footer}>
                    <Footer/>
                </footer> 
            </div>      
        </div>
    )
}