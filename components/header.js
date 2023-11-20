import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter} from 'next/router'
import styles from '../styles/header.module.css'

export default function Header() {
    const router = useRouter();
  return (
      <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>

            <Link href="/">
                <a>
                    <Image src='/img/logo.svg' width={300} height={40} alt='Imagen Logotipo'/>
                </a>
            </Link>

            <nav className={styles.navegation}>
                <Link href="/">
                    <a className={ router.pathname === '/' ? styles.active : ''}>
                        Home
                    </a>
                </Link>
                <Link href="/ours">
                    <a className={ router.pathname === '/ours' ? styles.active : ''}>
                        Ours
                    </a>
                </Link>
                <Link href="/store">
                    <a className={ router.pathname === '/store' ? styles.active : ''}>
                        Store
                    </a>
                </Link>
                <Link href="/blog">
                    <a className={ router.pathname === '/blog' ? styles.active : ''}>
                        Blog
                    </a>
                </Link>
                
                <Link href="/cart">
                    <a>
                        <Image width={30} height={25} src="/img/carrito.png" alt='icono Carrito'/>
                    </a>
                </Link>
            </nav>
        </div>
    </header>
  )
}
