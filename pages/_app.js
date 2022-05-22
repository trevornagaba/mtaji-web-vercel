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
        <title>Mtaji</title>
      </Head>

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
