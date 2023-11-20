import Image from "next/future/image";
import Layout from "../../components/layout";
import styles from '../../styles/blog.module.css'
import { formatDate } from "../../utils/helper";

export default function Category({blog}) {

  const {photo_url, title, created_at, content_text, description} = blog
  return (
    <Layout
      title={title}
    >
              <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={photo_url} alt={description} width={1000} height={400} />

            <div className={styles.contenido}>
                <h3>{title}</h3>
                <p className={styles.fecha}>{formatDate(created_at)}</p>
                <p className={styles.texto}>{content_text}</p>
            </div>
        </article>
    </Layout>
  )
}

export async function getServerSideProps({query: {id}}){
    const request = await fetch(`${process.env.API_URL_POSTS}/blog-posts/${id}`)
    const {blog} = await request.json()
    return {
      props:{
        blog
      }
    }
}
