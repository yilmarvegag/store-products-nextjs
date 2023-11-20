import Image from "next/future/image";
import Link from "next/link";
import {formatDate} from '../utils/helper'
import styles from "../styles/blog.module.css"

export default function Post({post}) {
    
    const {content_text, photo_url, title, created_at, id, description} = post;


    return (
        <article>
            <Image src={photo_url} alt={description} width={600} height={400} />

            <div className={styles.contenido}>
                <h3>{title}</h3>
                <p className={styles.fecha}>{formatDate(created_at)}</p>
                <p className={styles.resumen}>{content_text}</p>
                <Link href={`/blog/${id}`}>
                    <a className={styles.enlace}>
                        Leer Post
                    </a>
                </Link>
            </div>
        </article>
    )
}
