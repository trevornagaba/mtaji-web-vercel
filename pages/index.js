import Header from "../components/Header";
import LandingPage from "../components/Landing";
import BenefitsSection from "../components/landing/BenefitsSection";
import CompaniesSection from "../components/landing/CompaniesSection";
import RaiseFunds from "../components/RaiseFunds";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Header />
            <LandingPage/>
            <Footer/>
        </>
    );
}
