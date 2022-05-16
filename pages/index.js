import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <img src="/assets/logo.svg" alt="logo" />
          <span>mtaji</span>
        </div>

        <div className="links">
          <span>Explore</span>
          <span>Investment 101</span>
          <span>FAQs</span>
        </div>

        <div className="auth">
          <Link href="/login">
            <span>Sign In</span>
          </Link>

          <Link href="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>

      <div className="tagline">
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

      <div className="footer">
        <div className="container">
          <div className="contact-links">
            <div className="logo">
              <img src="/assets/logo.svg" alt="logo" />
              <span>mtaji</span>
            </div>

            <div className="link">
              <img src="/assets/email.svg" alt="email" />
              <span> support@mtaji.io </span>
            </div>

            <div className="link">
              <img src="/assets/phone.svg" alt="phone" />
              <span>01222845686</span>
            </div>

            <div className="image-links">
              <img src="/assets/linked_in.svg" alt="linkedin" />
              <img src="/assets/facebook.svg" alt="facebook" />
              <img src="/assets/twitter.svg" alt="twitter" />
              <img src="/assets/instagram.svg" alt="instagram" />
            </div>
          </div>

          <div className="other-links">
            <p className="title">Other Links</p>

            <div className="other-links-container">
              <div className="group-1">
                <p>About</p>
                <p>FAQs</p>
                <p>Blog</p>
              </div>

              <div className="group-2">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>AML Policy</p>
              </div>
            </div>
          </div>
        </div>

        <p className="copyright">&copy; Mansa Finance. All Rights Reserved.</p>
      </div>

      <style jsx>
        {`
          .nav-bar {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 16px;
          }

          .nav-bar .logo,
          .footer .contact-links .logo {
            display: flex;
            align-items: center;
          }

          .nav-bar .logo span,
          .footer .contact-links .logo span {
            color: #2518b8;
            font-weight: bold;
            padding-left: 4px;
          }

          .nav-bar .links span,
          .nav-bar .auth span,
          .other-links-container p {
            padding: 0 16px;
            cursor: pointer;
          }

          .nav-bar .links span:hover,
          .nav-bar .auth span:hover,
          .other-links-container p:hover {
            color: #01bbc8;
          }

          .nav-bar .auth button {
            background-color: #01bbc8;
            border-radius: 5px;
            color: white;
            padding: 8px;
            border: none;
            cursor: pointer;
          }

          .nav-bar .auth button:hover {
            background-color: #09062d;
          }

          .tagline {
            display: flex;
            height: 100vh;
            background-image: url("/assets/illustration_2.svg");
            background-position: right;
            background-size: 60%;
            background-repeat: no-repeat;
            align-items: center;
          }

          .tagline .proposition {
            width: 50%;
            padding: 32px;
          }

          .tagline .proposition h1 {
            color: #09062d;
            font-size: 54px;
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
            color: white;
            font-weight: bold;
            font-size: 19px;
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

          .footer {
            padding: 16px;
          }

          .footer .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .contact-links {
            flex-grow: 1;
          }

          .contact-links .logo {
            margin-bottom: 24px;
          }

          .contact-links .link {
            display: flex;
            padding: 8px 0;
          }

          .contact-links .link span {
            cursor: pointer;
            padding-left: 8px;
          }

          .contact-links .link span:hover {
            color: #01bbc8;
          }

          .contact-links .image-links {
            padding: 16px 0;
          }

          .contact-links .image-links img {
            display: inline-block;
            padding: 8px;
            cursor: pointer;
          }

          .other-links {
            flex-grow: 1.8;
          }

          .other-links .other-links-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }

          .other-links .title {
            text-align: center;
          }

          .copyright {
            text-align: center;
          }

          /* Adjust for smartphone screen sizes. */
          @media only screen and (max-width: 600px) {
            .nav-bar {
              flex-direction: column;
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
