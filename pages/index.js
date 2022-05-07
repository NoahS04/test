import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>USA navbox tool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="USA Navbar Tool" />
        <p className="description">
          Das ist eine Seite zum Erstellen von <code>USA-County-Navbar Quellcodes</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
