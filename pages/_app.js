import "../styles/global.css";
import Head from "next/head";
import Link from "next/link";

import HomeLogo from "../components/HomeLogo";

import AppContextProvider from "../components/AppContext";

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
            <AppContextProvider>
                <Component {...pageProps} />
            </AppContextProvider>
        </>
    );
}

export default MyApp;
