import Link from "next/link"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <ul className={styles.navbar}>
            <li>
                <Link href="/">
                    <a>Heroflix</a>
                </Link>
            </li>
            <li>
                <Link href="./sobre">
                    <a>Sobre</a>
                </Link>
            </li> 
            <li>
                <Link href="./inicio">
                    <a>Dragon</a>
                </Link>
            </li>
            <li>
                <Link href="./teste">
                    <a>Teste</a>
                </Link>
            </li>                  
        </ul>
    
    )
}