import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Text+Me+One&display=swap" rel="stylesheet" />
      </Head>
      <NavBar />
      <SideBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
