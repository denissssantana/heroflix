import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Cadastro.module.css'

export default function Cadastro() {
    return (
        <>
        <Head>
            <title>Cadastro</title>
        </Head>
        <div className={styles.container}>
            <h1>Cadastro</h1>
            <Link href="./login"> 
            <h1>link Login</h1>
            </Link>
        </div>
    </>
  )
}



