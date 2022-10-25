import "../styles/global.css";
import Head from "next/head";

import AppContextProvider from "../components/AppContext";
import Modal from "../components/ModalComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
            <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
                <Component {...pageProps} />
            </GoogleOAuthProvider>
            </AppContextProvider>
                
        </>
    );
}

export default MyApp;
