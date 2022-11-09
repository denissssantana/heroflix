import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Login.module.css'

export default function Login() {
  return (
      <>
        <Head>
            <title>Login</title>
        </Head>
        <div className={styles.container}>
            <h1>Login</h1>
            <Link href="./cadastro"> 
            <h1>link Cadastro</h1>
            </Link>
            <Link href="./principal"> 
            <h1>link Principal</h1>
            </Link>
        </div>
    </>
  )
}
