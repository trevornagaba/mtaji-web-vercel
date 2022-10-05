
import AppContextProvider from "../components/AppContext"

// import Landing from "../components/landing";
import Head from "next/head";

export default function Home() {
    return (
        // <PageTemplate hasNavbar={true} hasWrapper={false} hasFooter={true}>
        <>
            <Head>
                <title>Welcome to Mtaji</title>
                <meta name="description" content="Equity Crowdfunding for Africans" />
            </Head>
            {/* <Landing /> */}
        </>
        // </PageTemplate>
    );
}
