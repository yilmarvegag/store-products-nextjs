import styles from '../styles/curso.module.css'

export default function Product({ lProduct }) {

    const { description, photo_url, name, } = lProduct
    
    return (
        <section className={`${styles.curso} curso`}>
            <style jsx>{`
        .curso{
            background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${photo_url})
        }
        `}

            </style>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    )
}
