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
        <main>
          
        <h1>LOGIN</h1>
        <div cassName={styles.rightLogin}>
          <div className={styles.cardLogin}>
            <div className={styles.textfield}>
              <label for="Usuario">Usuario</label>
              <imput type="text" name="usuario" placeholder="Usuario"></imput>
            </div>
            <div className={styles.textfield}>
              <label for="Senha">Senha</label>
              <imput type="password" name="senha" placeholder="Senha"></imput>
            </div>
            <button class="btn-login">Login</button>

          </div>

        </div></main>
    </>
  )
}
