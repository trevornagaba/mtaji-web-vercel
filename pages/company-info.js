export default function CompanyInfo() {
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <img src="/assets/logo.svg" alt="logo" />
          <span>mtaji</span>
        </div>

        <div className="links">
          <span>Explore</span>
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
    </>
  );
}
