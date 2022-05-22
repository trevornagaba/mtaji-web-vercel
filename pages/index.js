import Link from "next/link";
import LandingNavBar from "../components/landing/LandingNavBar";
import Footer from "../components/Footer";
import BenefitsSection from "../components/landing/BenefitsSection";
import CompaniesSection from "../components/landing/CompaniesSection";

export default function Home() {
  return (
    <>
      <LandingNavBar />

      <div className="tagline">
        <div className="tagline-background" />

        <div className="proposition">
          <h1>
            Invest in Africa&apos;s <br />
            next big company
          </h1>
          <p>
            Be a part owner of a thriving business with as little as UGX 50,000
          </p>
          <div className="btn">
            <Link href="/signup">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
      </div>

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

      <style jsx>
        {`
          .tagline {
            display: flex;
            height: 100vh;
            background-image: url("/assets/illustration_3.svg");
            background-position: right;
            background-repeat: no-repeat;
            align-items: center;
            position: relative;
          }

          .tagline-background {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: #f7f6fe;
            opacity: 0;
          }

          .tagline .proposition {
            width: 50%;
            padding: 32px;
            background-image: url("/assets/tagline_background.svg");
            background-position: bottom right;
            background-repeat: no-repeat;
            z-index: 1000;
          }

          .tagline .proposition h1 {
            color: #09062d;
            font-size: 2.6rem;
            font-weight: bold;
          }

          .tagline .proposition .btn {
            padding: 16px 0;
          }

          .tagline .proposition .btn button {
            background: #2518b8;
            border: none;
            box-shadow: 2px 2px 12px rgba(37, 24, 184, 0.6);
            color: white;
            font-weight: bold;
            font-size: 1.1rem;
            border-radius: 5px;
            cursor: pointer;
            display: block;
            margin: auto;
            padding: 8px 24px;
          }

          .tagline .proposition .btn button:hover {
            background-color: #01bbc8;
          }

          /* Adjust for smartphone screen sizes. */
          @media only screen and (max-width: 600px) {
            .tagline-background {
              opacity: 0.88;
            }

            .tagline .proposition {
              padding: 8px;
              width: 100%;
            }

            .tagline .proposition h1 {
              font-size: 2rem;
            }
          }

          /* Adjust for tablet screen sizes. */
          @media only screen and (min-width: 600px) and (max-width: 800px) {
            .tagline-background {
              opacity: 0.88;
            }

            .tagline .proposition {
              width: 100%;
            }

            .tagline .proposition h1 {
              font-size: 2rem;
            }
          }
        `}
      </style>
    </>
  );
}
