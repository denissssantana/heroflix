import Image from 'next/image'
import styles from '../styles/Footer.module.css'

export default function footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Image 
                    src="/images/logosf.png" 
                    width="60" 
                    height="50" 
                    alt="brasão"/>
            </div>          
        </footer>      
        
    )

}