import React from 'react'
import styles from '../styles/footer.module.css'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={`contenedor ${styles.contenido}`}>

        <nav className={ styles.navigation}>
            <Link href="/">
                    Home
            </Link>
            <Link href="/ours">
                    Ours
            </Link>
            <Link href="/store">
                    Store
            </Link>
            <Link href="/blog">
                    Blog
            </Link>
        </nav>

        <p className={styles.copyright}>Todos los derechos reservador - {new Date().getFullYear()}</p>
      
      </div>

    </footer>
  )
}
