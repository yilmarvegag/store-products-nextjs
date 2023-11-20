import Link from "next/link"
import Layout from "../components/layout"

export default function Page404() {
  return (
    <Layout
        title="Página No Encontrada"
    >
        <p className="error">Página no Encontrada</p>

        <Link href='/'>
            <a className="error-enlace">
                Ir a inicio
            </a>
        </Link>

    </Layout>
  )
}
