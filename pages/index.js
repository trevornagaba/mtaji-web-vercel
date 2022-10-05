
import AppContextProvider from "../components/AppContext"

import Header from "../components/Header";
import Landing from "../components/landing";
import PageTemplate from "../components/pageTemplate";
import BenefitsSection from "../components/landing/BenefitsSection";
import CompaniesSection from "../components/landing/CompaniesSection";
import RaiseFunds from "../components/RaiseFunds";
import Footer from "../components/Footer";
import Link from "next/link";
import Modal from "../components/ModalComponent";
import Head from "next/head";

export default function Home() {
    return (
        // <PageTemplate hasNavbar={true} hasWrapper={false} hasFooter={true}>
        <>
            <Head>
                <title>Welcome to Mtaji</title>
                <meta name="description" content="Equity Crowdfunding for Africans" />
            </Head>
            <Landing />
        </>
        // </PageTemplate>
    );
}
