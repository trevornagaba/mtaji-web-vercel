import Link from "next/link";
import LandingNavBar from "../components/landing/LandingNavBar";
import TaglineSection from "../components/landing/TaglineSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import CompaniesSection from "../components/landing/CompaniesSection";
import RaiseFunds from "../components/RaiseFunds";

export default function Home() {
  return (
    <>
      <LandingNavBar />
      <TaglineSection />
      <BenefitsSection />
      <CompaniesSection />
      <RaiseFunds />
    </>
  );
}