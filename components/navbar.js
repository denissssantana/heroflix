import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Navbar.module.css"


export default function Navbar() {
    return (
        <ul className={styles.navbar}>
            <div className={styles.logo1}>
            <Image 
                    src="/images/logo1.png" 
                    width="120" 
                    height="40" 
                    alt="brasão"/>
            </div>
            <li>
                <Link href="/">
                    <a>Início</a>
                </Link>
            </li>
            <li>
                <Link href="./principal">
                    <a>Login/Logout</a>
                </Link>
            </li> 
            <li>
                <Link href="./principal">
                    <a>Principal</a>
                </Link>
            </li> 
           
            <li>
                <Link href="./player">
                    <a>Player</a>
                </Link>
            </li>   
            <li>
                <Link href="./teste">
                    <a>testeHtml</a>
                </Link>
            </li>                 
        </ul>
    
    )
}