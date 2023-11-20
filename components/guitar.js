import Image from "next/image"
import styles from "../styles/guitarras.module.css"
import Link from "next/link"

export default function Guitar({image}) {

  const {largeImageURL, likes, views, user, tags, webformatWidth, webformatHeight, id} = image
  
  return (
    <div className={styles.guitarra}>
      <Image src={largeImageURL} width={webformatWidth} height={webformatHeight} alt={tags} />

      <div className={styles.contenido}>
        <h3>{user}</h3>
        <p className={styles.descripcion}>{likes} {tags}</p>
        <p className={styles.precio}>${views}</p>

        <Link href={`/guitars/${id}`}>
          <a className={styles.enlace}>
            Ver producto
          </a>
        </Link>

      </div>
    </div>
  )
}
