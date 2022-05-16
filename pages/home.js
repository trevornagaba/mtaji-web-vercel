export default function HomePage() {
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

      <div className="portfolio-section">
        <p className="header">Portfolio</p>

        <div className="portfolio">
          <div className="cash-portfolio">
            <p className="header">Cash</p>

            <p className="balance">$0.00</p>

            <div className="buttons">
              <button className="fund-button">Fund</button>
              <button>Send</button>
              <button>Withdraw</button>
            </div>
          </div>

          <div className="investments-portfolio">
            <div className="header">
              <p>My Investments</p>
              <button>Explore</button>
            </div>

            <div className="investment">
              <div className="company">
                <img src="/assets/logo_in_card.svg" alt="logo" />
                <p>SafeBoda</p>
              </div>

              <p className="description">Payment Startup</p>

              <div className="balance">
                <p className="amount">$17.23</p>
                <p className="label">debt</p>
              </div>
            </div>

            <div className="investment">
              <div className="company">
                <img src="/assets/logo_in_card.svg" alt="logo" />
                <p>SafeBoda</p>
              </div>

              <p className="description">Payment Startup</p>

              <div className="balance">
                <p className="amount">$17.23</p>
                <p className="label">debt</p>
              </div>
            </div>

            <div className="investment">
              <div className="company">
                <img src="/assets/logo_in_card.svg" alt="logo" />
                <p>SafeBoda</p>
              </div>

              <p className="description">Payment Startup</p>

              <div className="balance">
                <p className="amount">$17.23</p>
                <p className="label">debt</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="companies-section">
        <div className="header">
          <p className="title">Currently Raising</p>
          <p className="link">See all</p>
        </div>

        <div className="companies">
          <div className="company-card">
            <img src="/assets/logo_in_card.svg" alt="logo" />
            <p className="company-name">Chipper Cash</p>
            <p className="company-summary">
              Some short description of the company at hand...
            </p>
          </div>

          <div className="company-card">
            <img src="/assets/logo_in_card.svg" alt="logo" />
            <p className="company-name">Chipper Cash</p>
            <p className="company-summary">
              Some short description of the company at hand...
            </p>
          </div>

          <div className="company-card">
            <img src="/assets/logo_in_card.svg" alt="logo" />
            <p className="company-name">Chipper Cash</p>
            <p className="company-summary">
              Some short description of the company at hand...
            </p>
          </div>

          <div className="company-card">
            <img src="/assets/logo_in_card.svg" alt="logo" />
            <p className="company-name">Chipper Cash</p>
            <p className="company-summary">
              Some short description of the company at hand...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
