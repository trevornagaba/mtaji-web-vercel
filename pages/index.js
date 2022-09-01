
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

export default function Home() {
    return (
        // <PageTemplate hasNavbar={true} hasWrapper={false} hasFooter={true}>
        <AppContextProvider>
            <Landing/>
            <Modal/>
        </AppContextProvider>
        // </PageTemplate>
    );
}
