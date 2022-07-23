import LandingNavBar from "../components/landing/LandingNavBar";
import TaglineSection from "../components/landing/TaglineSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import CompaniesSection from "../components/landing/CompaniesSection";
import RaiseFunds from "../components/RaiseFunds";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <TaglineSection />
            <BenefitsSection />
            <div className="w-full py-20 bg-gray-50">
                <CompaniesSection />
                <RaiseFunds />
            </div>
            <Footer/>
        </>
    );
}
