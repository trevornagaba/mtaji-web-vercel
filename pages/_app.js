import "../styles/styles.css";
import Head from "next/head";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>Mtaji</title>
      </Head>

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
