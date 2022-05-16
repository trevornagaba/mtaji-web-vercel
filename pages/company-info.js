import Link from "next/link";

export default function CompanyInfo() {
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <img src="/assets/logo.svg" alt="logo" />
          <span>mtaji</span>
        </div>

        <div className="links">
          <Link href="/explore">
            <span>Explore</span>
          </Link>
          <span>Portfolio</span>
          <span>Marketplace</span>
        </div>

        <div className="account">
          <span>FAQs</span>
          <img src="/assets/account.svg" alt="account" />
        </div>
      </div>

      <div className="header">
        <div className="company-summary">
          <img src="/assets/logo_in_card.svg" alt="logo" />
          <div>
            <p className="company-name">SafeBoda</p>
            <p className="company-link">www.safeboda.com</p>
          </div>
        </div>

        <div className="countdown">
          <div className="countdown-number">
            <img src="/assets/clock.svg" alt="clock" />
            <p>7</p>
          </div>

          <p className="countdown-unit">Days</p>
        </div>

        <div className="share-button">
          <img src="/assets/share.svg" alt="share" />
          <p>Share</p>
        </div>
      </div>

      <div className="content-1">
        <div className="video">
          <iframe src="https://www.youtube.com/embed/e0H_fXxVn8k"></iframe>
        </div>

        <div className="company-details">
          <div className="valuation">
            <p className="label">
              Current <br />
              Evaluation
            </p>
            <div>
              <p className="valuation-dollars">$ 10,000,000</p>
              <p className="valuation-ugx">UGX 35 trillion</p>
            </div>
          </div>

          <div className="amount-raised">
            <p className="label">
              Amount <br />
              raised
            </p>

            <div className="amount-details">
              <p className="total">$ 901,000 / $ 1,000,000 raised</p>
              <div className="amount-percentage-indicator">
                <div></div>
              </div>
              <p className="amount-percentage">90.17%</p>
            </div>
          </div>

          <div className="invest">
            <div className="invest-label">
              <p className="invest-label-title">Invest</p>
              <p className="invest-label-minimum">min $1</p>
            </div>

            <div className="invest-amount">
              <div className="invest-amount-selector">
                <select name="currency" id="currency">
                  <option value="dollars">$</option>
                  <option value="shillings">UGX</option>
                </select>

                <p>20.00</p>
              </div>

              <p className="invest-transaction-fee">+Transaction fee: $0.50</p>
            </div>
          </div>

          <button className="invest-button">INVEST</button>

          <div className="wishlist-button">
            <img src="/assets/heart.svg" alt="heart" />
            <p>Add to Watchlist</p>
          </div>
        </div>
      </div>

      <div className="content-2">
        <div className="company-literature">
          <div className="literature-types">
            <p className="selected">Overview</p>
            <p>Problem</p>
            <p>Solution</p>
            <p>Team</p>
            <p>Documents</p>
          </div>

          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="company-details">
          <div className="valuation">
            <p className="label">
              Current <br />
              Evaluation
            </p>
            <div>
              <p className="valuation-dollars">$ 10,000,000</p>
              <p className="valuation-ugx">UGX 35 trillion</p>
            </div>
          </div>

          <div className="amount-raised">
            <p className="label">
              Amount <br />
              raised
            </p>

            <div className="amount-details">
              <p className="total">$ 901,000 / $ 1,000,000 raised</p>
              <div className="amount-percentage-indicator">
                <div></div>
              </div>
              <p className="amount-percentage">90.17%</p>
            </div>
          </div>

          <div className="invest">
            <div className="invest-label">
              <p className="invest-label-title">Invest</p>
              <p className="invest-label-minimum">min $1</p>
            </div>

            <div className="invest-amount">
              <div className="invest-amount-selector">
                <select name="currency" id="currency">
                  <option value="dollars">$</option>
                  <option value="shillings">UGX</option>
                </select>

                <p>20.00</p>
              </div>

              <p className="invest-transaction-fee">+Transaction fee: $0.50</p>
            </div>
          </div>

          <button className="invest-button">INVEST</button>

          <div className="wishlist-button">
            <img src="/assets/heart.svg" alt="heart" />
            <p>Add to Watchlist</p>
          </div>
        </div>
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
        <button>Sign Up Here</button>
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

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          padding: 16px;
        }

        .company-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .company-summary img {
          display: block;
          width: 32px;
          height: 32px;
        }

        .company-summary div {
          padding-left: 8px;
          margin: 0;
        }

        .company-summary div p {
          padding: 0;
          margin: 0;
        }

        .company-summary .company-link {
          color: #2518b8;
          font-size: 0.8rem;
          cursor: pointer;
        }

        .countdown {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .countdown-number {
          display: flex;
          align-items: center;
          padding: 0;
          margin: 0;
        }

        .countdown-number p {
          padding-left: 8px;
          margin: 0;
        }

        .countdown-unit {
          margin: 0;
          padding: 0;
        }

        .share-button {
          display: flex;
          border: 2px solid #2518b8;
          padding: 0 16px;
          border-radius: 10px;
          cursor: pointer;
        }

        .share-button p {
          padding-left: 16px;
          color: #2518b8;
        }

        .content-1 {
          display: flex;
          padding: 16px;
          justify-content: space-evenly;
        }

        .video {
          width: 55%;
        }

        .video iframe {
          width: 100%;
          height: 100%;
          border-radius: 24px;
        }

        .company-details {
          width: 35%;
          background-color: white;
          border-radius: 24px;
          padding: 24px;
        }

        .valuation {
          display: flex;
          align-items: center;
        }

        .valuation .label,
        .amount-raised .label {
          width: 30%;
          color: #8c8c8c;
        }

        .valuation div {
          padding-left: 24px;
        }

        .valuation div p {
          margin: 0;
        }

        .valuation .valuation-dollars {
          font-weight: bold;
        }

        .valuation .valuation-ugx {
          font-size: 0.8rem;
        }

        .amount-raised {
          display: flex;
          align-items: center;
        }

        .amount-details {
          padding-left: 24px;
        }

        .amount-details p {
          margin: 0;
        }

        .amount-details .total {
          font-weight: bold;
        }

        .amount-percentage-indicator {
          height: 6px;
          background-color: #c4c4c4;
        }

        .amount-percentage-indicator div {
          background-color: #01bbc8;
          height: 100%;
          width: 90%;
        }

        .amount-percentage {
          text-align: end;
          font-size: 0.8rem;
          color: #8c8c8c;
        }

        .invest {
          display: flex;
        }

        .invest-label {
          width: 30%;
        }

        .invest-label p {
          margin: 0;
        }

        .invest-label-minimum {
          font-size: 0.8rem;
          color: #8c8c8c;
        }

        .invest-amount {
          padding-left: 24px;
        }

        .invest-amount-selector {
          border: 1px solid #01bbc8;
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
          padding: 16px;
        }

        .invest-amount-selector select {
          padding: 4px;
        }

        .invest-amount-selector p {
          margin: 0;
          padding: 0;
        }

        .invest-transaction-fee {
          text-align: end;
          margin: 0;
          color: #8c8c8c;
          font-size: 0.8rem;
        }

        .invest-button {
          background-color: #01bbc8;
          border: none;
          border-radius: 5px;
          color: white;
          display: block;
          margin: 16px 0;
          width: 100%;
          cursor: pointer;
          padding: 16px;
        }

        .invest-button:hover {
          background-color: black;
        }

        .wishlist-button {
          border: 1px solid #01bbc8;
          cursor: pointer;
          color: #01bbc8;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          padding: 16px;
        }

        .wishlist-button:hover {
          border: 1px solid black;
        }

        .wishlist-button p {
          margin: 0;
          padding-left: 16px;
        }

        .content-2 {
          display: flex;
          padding: 16px;
          justify-content: space-evenly;
        }

        .company-literature {
          width: 55%;
          background-color: white;
          border-radius: 24px;
          padding: 16px;
        }

        .literature-types {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }

        .literature-types p {
          cursor: pointer;
        }

        .literature-types p:hover {
          color: #01bbc8;
        }

        .literature-types .selected {
          border-bottom: 3px solid #535fd7;
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
          .header {
            flex-wrap: wrap;
          }

          .content-1,
          .content-2 {
            flex-direction: column;
            padding: 0;
          }

          .content-2 {
            margin-top: 16px;
          }

          .video {
            width: 100%;
          }

          .company-details,
          .company-literature {
            width: 100%;
          }

          .content-2 {
            padding: 0;
          }

          .company-literature {
            margin-bottom: 16px;
          }
        }

        /* Adjust for tablet screen sizes. */
        @media only screen and (min-width: 600px) and (max-width: 800px) {
          .content-1,
          .content-2 {
            flex-direction: column;
          }

          .video {
            width: 100%;
          }

          .company-details,
          .company-literature {
            width: 100%;
          }

          .company-literature {
            margin-bottom: 16px;
          }
        }
      `}</style>
    </>
  );
}
