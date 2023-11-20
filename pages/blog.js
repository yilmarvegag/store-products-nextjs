import Layout from "../components/layout"
import Post from "../components/post"
import styles from "../styles/grid.module.css"

export default function Blog({lPosts}) {

  console.log(lPosts)
  return (
    <>
      <Layout
        title={"Blog"}
        description={"Blog de musica, venta de guitarras, consejos, GuitarLA"}
      >

          <main className="contenedor">
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
          </main>
      </Layout>
    </>
  )
}

export async function getStaticProps(){
    const request = await fetch(`${process.env.API_URL_POSTS}/blog-posts`)
    const {blogs: lPosts} = await request.json()
    return {
      props:{
        lPosts
      }
    }
}
