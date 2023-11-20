import Link from "next/link"
import Layout from "../components/layout"
import Image from "next/image"
import styles from '../styles/ours.module.css'

export default function Ours() {
  return (
    <>
      <Layout
        title={"Ours"}
        description={"Sobre nosotros GuitarLA"}
      >

        <main className="contenedor">
          <h2 className="heading">Our</h2>
          <div className={styles.contenido}>
            <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Imagen sobre nosotros"></Image>
            <di>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at ligula non augue condimentum pharetra. Ut ultrices nisl eu dolor vulputate, ut euismod metus consectetur. Aliquam porttitor ligula non elit dictum porta. Aliquam eget dapibus mauris, ac convallis est. Nam tincidunt dignissim faucibus. Donec elementum et libero gravida tempus. Curabitur hendrerit vitae lectus vel laoreet. Donec gravida ut tortor non bibendum.</p>
              <p>Sed efficitur ante ex, eu aliquet ex porttitor sit amet. Praesent dictum risus cursus, sollicitudin nulla et, rutrum ipsum. Sed ut leo ex. Nam posuere gravida ornare. Maecenas ante mi, egestas a augue non, tincidunt cursus purus. Etiam eleifend arcu ac lobortis ultricies. Cras rutrum hendrerit justo, sit amet pulvinar mauris cursus a. Donec ac cursus augue. Etiam ac nunc rhoncus, suscipit ex hendrerit, auctor erat.</p>
            </di>
          </div>
        </main>

      </Layout>
    </>
  )
}
