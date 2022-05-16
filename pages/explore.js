import Link from "next/link";

export default function Explore() {
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

      <div className="content">
        <p className="heading">Portfolio</p>

        <div className="table">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>

          <div className="table-heading">
            <p className="company">Company</p>
            <p className="target-amount">Target Amount</p>
            <p className="days-left">Days Left</p>
          </div>

          <div className="table-row">
            <div className="company-summary">
              <img src="/assets/logo_in_card.svg" alt="logo" />

              <div>
                <p className="company-name">SafeBoda</p>
                <p className="company-tag">Logistics Startup</p>
              </div>
            </div>

            <div className="company-target">
              <p className="amount">UGX 50M</p>

              <div className="target-indicator">
                <div className="target-bar">
                  <p className="target-label">82%</p>
                </div>
              </div>
            </div>

            <div className="remaining-days">
              <div className="days-container">
                <div>
                  <img src="/assets/clock.svg" alt="clock" />
                  <p>7</p>
                </div>
                <p className="label">days</p>
              </div>

              <Link href="/company-info">
                <button className="view-button">View</button>
              </Link>
            </div>
          </div>
          <div className="table-row">
            <div className="company-summary">
              <img src="/assets/logo_in_card.svg" alt="logo" />

              <div>
                <p className="company-name">SafeBoda</p>
                <p className="company-tag">Logistics Startup</p>
              </div>
            </div>

            <div className="company-target">
              <p className="amount">UGX 50M</p>

              <div className="target-indicator">
                <div className="target-bar">
                  <p className="target-label">82%</p>
                </div>
              </div>
            </div>

            <div className="remaining-days">
              <div className="days-container">
                <div>
                  <img src="/assets/clock.svg" alt="clock" />
                  <p>7</p>
                </div>
                <p className="label">days</p>
              </div>

              <Link href="/company-info">
                <button className="view-button">View</button>
              </Link>
            </div>
          </div>
          <div className="table-row">
            <div className="company-summary">
              <img src="/assets/logo_in_card.svg" alt="logo" />

              <div>
                <p className="company-name">SafeBoda</p>
                <p className="company-tag">Logistics Startup</p>
              </div>
            </div>

            <div className="company-target">
              <p className="amount">UGX 50M</p>

              <div className="target-indicator">
                <div className="target-bar">
                  <p className="target-label">82%</p>
                </div>
              </div>
            </div>

            <div className="remaining-days">
              <div className="days-container">
                <div>
                  <img src="/assets/clock.svg" alt="clock" />
                  <p>7</p>
                </div>
                <p className="label">days</p>
              </div>

              <Link href="/company-info">
                <button className="view-button">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
