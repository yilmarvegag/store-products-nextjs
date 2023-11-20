import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import Layout from '../components/layout'
import styles from '../styles/cart.module.css'

export default function Cart({carrito, actualizarCantidad, eliminarProducto}) {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calcu = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calcu)
    }, [carrito])

  return (
    <Layout
        title='Carrito de compras' 
    >

        <main>
            <h1 className='heading'>Carrito</h1>
            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h2>Artículos</h2>
                    {carrito.length === 0 ? 'Carro vacío' : (
                        carrito.map( product => (
                            <div key={product.id} className={styles.producto}>
                                <div>
                                    <Image width={250} height={480} src={product.image} alt={product.user}/>
                                </div>
                                <div>
                                    <p className={styles.nombre}>{product.user}</p>
                                    <div className={styles.cantidad}>
                                        <p>Cantidad: {product.cantidad}</p>
                                        <select 
                                            className={styles.select}
                                            onChange={ e => actualizarCantidad({
                                                id: product.id,
                                                cantidad: e.target.value
                                            })}
                                            value={product.cantidad}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                    <p className={styles.precio}>$<span>{product.precio}</span></p>
                                    <p className={styles.subtotal}>Subtotal: $<span>{product.cantidad * product.precio}</span></p>
                                </div>
                                <button
                                    className={styles.eliminar}
                                    type='button'
                                    onClick={() => eliminarProducto(product.id)}
                                >
                                    X
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <aside className={styles.resumen}>
                    <h3>Resumen del Pedido</h3>
                    <p>Total a pagar: ${total}</p>
                </aside>
            </div>
        </main>
        
    </Layout>
  )
}
