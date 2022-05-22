import Link from "next/link";
import LandingNavBar from "../components/landing/LandingNavBar";
import TaglineSection from "../components/landing/TaglineSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import CompaniesSection from "../components/landing/CompaniesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <LandingNavBar />
      <TaglineSection />
      <BenefitsSection />
      <CompaniesSection />

      <div className="sign-up-section">
        <p className="title">
          Is your company looking to <br />
          raise funds?
        </p>
        <p className="description">
          Get connected with mission driven investors and your community <br />
          of users, customers and friends.
        </p>

        <Link href="/signup">
          <button>Sign Up Here</button>
        </Link>
      </div>

      <Footer />
    </>
  );
}
