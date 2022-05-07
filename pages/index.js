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
    <script language="JavaScript">
    <input type="text" name="staat" id="staat">
    let staat = document.querySelector("#staat").value;
      <input type="text" name="countyname" id="countyname">
    let countyname = document.querySelector("#countyname").value;
      <input type="text" name="countynamewiki" id="countynamewiki">
    let countynamewiki = document.querySelector("#countynamewiki").value;
  
  

    </script>
      </main>

      <Footer />
    </div>
  )
}
