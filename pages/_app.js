import "../styles/styles.css";
import "../styles/home-nav-bar.css";
import Head from "next/head";

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
    </>
  );
}

export default MyApp;
