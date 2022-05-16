import "../sketches/index.css";
import "../sketches/styles.css";
import "../sketches/login.css";
import "../sketches/signup.css";
import "../sketches/home-page.css";
import "../sketches/home-nav-bar.css";
import "../sketches/explore.css";
import "../sketches/company-info.css";
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
