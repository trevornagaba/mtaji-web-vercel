import Link from "next/link";
import LandingNavBar from "../components/LandingNavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <LandingNavBar />

      <div className="tagline">
        <div className="tagline-background"></div>

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

      <p className="section-header">
        Mtaji is a marketplace for investors and founders in Africa
      </p>
      <div className="benefits">
        <div className="benefits-list-1">
          <div>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
              90% of revenue generating businesses in Africa need additional
              capital to move from good to gread
            </p>
          </div>

          <div>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
              Millenials and professionals in diaspora are looking for a source
              of passive income
            </p>
          </div>
          <div>
            <img src="/assets/info_vector.svg" alt="info" />
            <p>
              Millenials and professionals in diaspora are looking for a source
              of passive income
            </p>
          </div>
        </div>

        <div className="benefits-list-2">
          <div className="list-item">
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <div>
              <p className="list-item-title">Unlock Opportunities</p>
              <p>
                Explore list of thriving African companies looking for capital
              </p>
            </div>
          </div>

          <div className="list-item">
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <div>
              <p className="list-item-title">Affordable</p>
              <p>Invest with as little as UGX 50,000</p>
            </div>
          </div>

          <div className="list-item">
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <div>
              <p className="list-item-title">Transparent</p>
              <p>
                See financials, past performance and team of companies looking
                for capital
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="section-header">
        Companies currently raising capital on mtaji
      </p>
      <div className="companies-section">
        <div className="companies">
          <div className="company">
            <img className="company-image" src="/assets/bike.jpg" alt="bike" />
            <img
              className="company-logo"
              src="/assets/logo_in_card.svg"
              alt="logo_in_card"
            />
            <p className="company-name">Safe Boda</p>

            <div className="company-details">
              <div className="company-target">
                <p className="detail-title">Target</p>
                <p>UGX 50M</p>
              </div>
              <div className="company-deadline">
                <p className="detail-title">To end in</p>
                <p>21h: 30m: 0s</p>
              </div>
            </div>

            <p className="company-summary">
              Lorem ipsum dolor, a short description of what the company is all
              about...
            </p>
          </div>

          <div className="company">
            <img className="company-image" src="/assets/bike.jpg" alt="bike" />
            <img
              className="company-logo"
              src="/assets/logo_in_card.svg"
              alt="logo_in_card"
            />
            <p className="company-name">Safe Boda</p>

            <div className="company-details">
              <div className="company-target">
                <p className="detail-title">Target</p>
                <p>UGX 50M</p>
              </div>
              <div className="company-deadline">
                <p className="detail-title">To end in</p>
                <p>21h: 30m: 0s</p>
              </div>
            </div>

            <p className="company-summary">Lorem ipsum dolorlldl ddkdl</p>
          </div>

          <div className="company">
            <img className="company-image" src="/assets/bike.jpg" alt="bike" />
            <img
              className="company-logo"
              src="/assets/logo_in_card.svg"
              alt="logo_in_card"
            />
            <p className="company-name">Safe Boda</p>

            <div className="company-details">
              <div className="company-target">
                <p className="detail-title">Target</p>
                <p>UGX 50M</p>
              </div>
              <div className="company-deadline">
                <p className="detail-title">To end in</p>
                <p>21h: 30m: 0s</p>
              </div>
            </div>

            <p className="company-summary">Lorem ipsum dolorlldl ddkdl</p>
          </div>
        </div>

        <button>Explore</button>
      </div>

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
            font-weight: 700;
            font-style: bold;
          }

          .tagline .proposition .btn {
            padding: 16px 0;
          }

          .tagline .proposition .btn button,
          .companies-section button {
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

          .tagline .proposition .btn button:hover,
          .companies-section button:hover {
            background-color: #01bbc8;
          }

          .section-header {
            padding: 16px;
            text-align: center;
            font-size: 24px;
            color: #09062d;
            margin: 0;
          }

          .benefits {
            display: flex;
            flex-wrap: wrap;
            padding: 0 16px;
            justify-content: space-between;
            color: #09062d;
          }

          .benefits-list-1 div {
            display: flex;
            align-items: center;
          }

          .benefits-list-1 div p {
            padding-left: 8px;
          }

          .benefits-list-1,
          .benefits-list-2 {
            padding: 16px;
            flex-basis: 50%;
          }

          .benefits-list-2 .list-item {
            display: flex;
            align-items: flex-start;
          }

          .benefits-list-2 div div {
            display: flex;
            flex-direction: column;
          }

          .benefits-list-2 .list-item div {
            margin-left: 16px;
          }

          .benefits-list-2 .list-item .list-item-title {
            margin: 0;
            font-weight: bold;
          }

          .companies-section {
            padding-bottom: 16px;
          }

          .companies {
            display: flex;
            justify-content: space-evenly;
            overflow: auto;
            padding: 16px;
            width: 100%;
          }

          .companies .company {
            background-color: white;
            min-width: 25%;
            max-width: 25%;
            border-radius: 32px;
            margin: 0 16px;
          }

          .company .company-image {
            display: block;
            width: 100%;
          }

          .company .company-logo {
            display: block;
            margin: auto;
          }

          .company .company-name {
            text-align: center;
            margin: 8px 0;
          }

          .company .company-details {
            display: flex;
            justify-content: space-between;
            padding: 16px;
          }

          .company .company-details p {
            margin: 0;
          }

          .company .company-details .detail-title {
            color: #8c8c8c;
            font-size: 0.8rem;
            margin: 0;
          }

          .company .company-details .company-deadline {
            text-align: end;
          }

          .company .company-summary {
            padding: 0 16px;
            width: 100%;
          }

          /* Adjust for smartphone screen sizes. */
          @media only screen and (max-width: 600px) {
            .nav-bar {
              flex-direction: column;
            }

            .tagline-background {
              opacity: 0.88;
            }

            .tagline .proposition {
              padding: 8px;
              width: 100%;
            }

            .tagline .proposition h1 {
              font-size: 48px;
            }

            .benefits {
              padding: 0;
            }

            .benefits-list-1,
            .benefits-list-2 {
              flex-basis: 100%;
            }

            .companies {
              justify-content: left;
            }

            .companies .company {
              min-width: 80%;
              max-width: 80%;
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
              font-size: 48px;
            }

            .companies {
              justify-content: left;
            }

            .companies .company {
              min-width: 35%;
              max-width: 35%;
            }
          }
        `}
      </style>
    </>
  );
}
