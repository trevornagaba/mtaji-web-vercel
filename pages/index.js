import LandingNavBar from "../components/landing/LandingNavBar";
import TaglineSection from "../components/landing/TaglineSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import CompaniesSection from "../components/landing/CompaniesSection";
import RaiseFunds from "../components/RaiseFunds";
import { Navbar } from "../components";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Navbar />
            <TaglineSection />
            <BenefitsSection />
            <CompaniesSection />
            <RaiseFunds />
        </>
    );
}
