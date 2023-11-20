import Layout from "../components/layout"
import Guitar from "../components/guitar"
import styles from '../styles/grid.module.css'
import Post from "../components/post"
import Product from "../components/product"

export default function Home({guitars, lPosts, lProducts}) {

  return (
    <>
      <Layout
        title={'Inicio'}
        description={"Blog de música y venta de guitarra"}
      >
        
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
            <div className={styles.grid}>
              {
                guitars.map(image => (
                  <Guitar
                    key={image.id}
                    image={image}
                  />
                ))
              }
            </div>
        </main>

        <Product
        lProduct={lProducts[0]}
        />

        <section className="contenedor">
          <h1 className="heading">Blog</h1>
            <div className={styles.grid}>
              { lPosts.map( post => (
                <Post
                key={post.id}
                post={post}
                >

                </Post>
              )) }
            </div>

        </section>
      </Layout>
    </>
  )
}


export async function getStaticProps(){
  const requestGuitars = `${process.env.API_URL}&q=guitarras`
  const requestPosts = `${process.env.API_URL_POSTS}/blog-posts`
  const requestProducts = `${process.env.API_URL_POSTS}/products?offset=5&limit=1`

  const [respGuitars, respPosts, respProducts] = await Promise.all([
    fetch(requestGuitars),
    fetch(requestPosts),
    fetch(requestProducts)
  ])

  const [{hits: guitars}, {blogs: lPosts}, {products: lProducts}] = await Promise.all([
    respGuitars.json(),
    respPosts.json(),
    respProducts.json()
  ])

  return {
    props:{
      guitars,
      lPosts,
      lProducts
    }
  }
}

