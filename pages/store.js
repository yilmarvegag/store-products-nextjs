import Layout from "../components/layout"
import Guitar from "../components/guitar"
import styles from "../styles/grid.module.css"

export default function Store({images}) {
  // console.log(images);
  return (
    <>
      <Layout
        title={"Store Online"}
        description={"Venta de guitarras GuitarLA"}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
          <div className={styles.grid}>
            {
              images.map(image => (
                <Guitar
                  key={image.id}
                  image={image}
                />
              ))
            }
          </div>
        </main>
      </Layout>
    </>
  )
}

// export async function getStaticProps(){
//     const request = await fetch(`${process.env.API_URL}guitarras`)
//     const {hits: images} = await request.json()
//     return {
//       props:{
//         images
//       }
//     }
// }

export async function getServerSideProps(){
  const request = await fetch(`${process.env.API_URL}&q=guitarras`)
  const {hits: images} = await request.json()
  return {
    props:{
      images
    }
  }
}
