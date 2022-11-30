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
                <Link href="/principal2">
                    <a>Início</a>
                </Link>
            </li>
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
            <li>
                <Link href="./principal2">
                    <a>Voltar</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Sair</a>
                </Link>
            </li>
         
         
        </ul>
    
    )
}