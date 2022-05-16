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
            Invest in Africa's <br />
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
    </>
  );
}
