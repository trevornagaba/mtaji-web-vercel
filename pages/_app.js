import "../styles/global.css";
import Head from "next/head";

import AppContextProvider from "../components/AppContext";
import Modal from "../components/ModalComponent";

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
                <link rel="shortcut icon" href="/assets/logo.svg" />
                <title>Mtaji</title>
            </Head>
            <AppContextProvider>
                <Component {...pageProps} />
            </AppContextProvider>
                
        </>
    );
}

export default MyApp;
