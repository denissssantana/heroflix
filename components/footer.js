import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function footer() {
    return (
        <footer className={styles.footer}>
           
            
            <Link href="./sobre">
                <a>Sobre</a>
            </Link>

            <div className={styles.logo}>
                <Image 
                    src="/images/logoFooter.png" 
                    width="50" 
                    height="40" 
                    alt="brasão"/>
            </div>
                        
            <Link href="./contato">
                <a>Contatos</a>
            </Link>
                       
        </footer>      
        
    )

}