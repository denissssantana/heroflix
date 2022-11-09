import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Image 
                    src="/images/logo1.png" 
                    width="100" 
                    height="100" 
                    alt="brasão"/>
            </div>
            <li>
                <Link href="./sobre">
                    <a>Sobre</a>
                </Link>
            </li> 
            <li>
                <Link href="./contato">
                    <a>Contatos</a>
                </Link>
            </li>            
        </footer>      
        
    )

}