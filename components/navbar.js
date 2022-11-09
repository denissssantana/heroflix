import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Navbar.module.css"


export default function Navbar() {
    return (
        <ul className={styles.navbar}>
            <div className={styles.logo1}>
            <Image 
                    src="/images/logo1.png" 
                    width="100" 
                    height="80" 
                    alt="brasão"/>
            </div>
            <li className={styles.link}>
                <Link href="/">
                    <a>Início</a>
                </Link>
            </li>
            <li>
                <Link href="./principal">
                    <a>Principal</a>
                </Link>
            </li> 
            <li>
                <Link href="./sobre">
                    <a>Canais</a>
                </Link>
            </li> 
            <li>
                <Link href="./player">
                    <a>Player</a>
                </Link>
            </li>                   
        </ul>
    
    )
}