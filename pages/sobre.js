import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/Sobre.module.css'

export default function Sobre() {
    return (
        <div>
            <Head>
                <title>Sobre</title>
            </Head>
            <div className={styles.container}>
                <header className={styles.header}>
                    <Navbar/>
                </header>
                <div className={styles.mainContent} >
                <main className={styles.main}>
                    <div className={styles.texto}>
                        <h1>Essa é uma aplicação web, utilizando os vários recursos disponibilizados pelo framework Next Js, visando a composição de um projeto, cumprindo os requisitos  da disciplina de programação Web, Ficr-2022.</h1>
                    </div>
                </main>
                </div>
                <footer className={styles.footer}>
                    <Footer/>
                </footer> 
            </div>      
        </div>
    )
}