import Layout1 from "../componants/layouts/Layout1"
import Layout2 from "../componants/layouts/Layout2"
import "../styles/globals.css"

export default function App(props) {
  const { Component, pageProps } = props

  const Layouts = {
    'L1': Layout1,
    'L2': Layout2,
  }
  
  const Layout = Layouts[Component.Layouts]


  return <Layout> <Component {...pageProps} /> </Layout>
}
