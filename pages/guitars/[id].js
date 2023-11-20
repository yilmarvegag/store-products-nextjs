import { useState } from 'react'
import  styles  from '../../styles/guitarras.module.css'
import  Layout   from '../../components/layout'
import Image from 'next/image'


export default function Guitar({guitar, agregarCarrito}) {
  
  const {largeImageURL, likes, views, user, tags, webformatWidth, webformatHeight, id} = guitar[0]

  const [cantidad, setCantidad] = useState(0)

  const handleSubmit = e => {
    e.preventDefault();

    if(cantidad < 1) {
      alert('Selecciones al menos uno(1)')
      return
    }

    //save en localstorage
    
    const guitar = {
      id: id,
      image: largeImageURL,
      user: user,
      views: views,
      precio: likes,
      cantidad: cantidad,
    }
    
    // console.log(guitar)
    agregarCarrito(guitar)

  }

  

    return (
      <Layout
        title={`Guitarra ${user}`}
      >
        <div className={styles.guitarra}>
          <Image src={largeImageURL} width={webformatWidth} height={webformatHeight} alt={tags} />
    
          <div className={styles.contenido}>
            <h3>{user}</h3>
            <p className={styles.descripcion}>{likes} {tags}</p>
            <p className={styles.precio}>${views}</p>  

            <form 
              onSubmit={handleSubmit}
              className={styles.formulario}
            >
              <label htmlFor='cantidad'>Cantidad: </label>
              <select 
                onChange={ e => setCantidad(+e.target.value) }
                id='cantidad'
              >
                <option value="0">--- Selecciones ---</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <input
                type="submit"
                value='Agregar al carrito'
               />
            </form>
          </div>
        </div>
      </Layout>
    )
}

export async function getStaticPaths(){
  const request = await fetch(`${process.env.API_URL}&q=guitarras`)
  const {hits} = await request.json()

  const paths = hits?.map(image => ({
    params: {
      id: image.id.toString()
    }
  }))

  // console.info(hits)

  return {
    paths,  
    fallback: false
  }
}

export async function getStaticProps({ params: {id} }){
  const request = await fetch(`${process.env.API_URL}&image_type=photo&id=${id}`)
  const {hits: guitar} = await request.json()
  
    return {
      props: {
        guitar
      }
    }
}
