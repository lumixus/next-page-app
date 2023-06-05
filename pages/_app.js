import '../styles/globals.scss'
import '../styles/globals.css'
import Layout from "./Layouts/layout"
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    document.body.classList.add("body");
  });


  return <>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
}

export default MyApp
