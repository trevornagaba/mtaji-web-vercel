import Link from "next/link";
import HomeNavBar from "../components/HomeNavBar";

export default function Explore() {
  return (
    <>
      <HomeNavBar />

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

      <style jsx>{`
        .content {
          padding: 16px;
        }

        .content .heading {
          font-weight: 700;
          font-size: 24px;
        }

        .table {
          background-color: white;
          padding: 24px;
          border-radius: 25px;
        }

        .table .search-bar {
          display: flex;
          flex-direction: row-reverse;
        }

        .search-bar input {
          background-color: #f7f6fe;
          padding: 8px;
          border-radius: 10px;
          border: none;
        }

        .table .table-heading {
          display: flex;
          border-bottom: 2px solid #2518b8;
          justify-content: space-between;
        }

        .table-heading p {
          font-weight: bold;
        }

        .table .table-row {
          display: flex;
          justify-content: space-between;
          padding: 16px;
          border: 1px solid #f7f6fe;
          border-radius: 10px;
          overflow: auto;
        }

        .table-row .company-summary {
          display: flex;
          align-items: center;
          padding: 0;
        }

        .company-summary img {
          width: 32px;
          height: 32px;
        }

        .company-summary div {
          padding: 0 0 0 16px;
        }

        .company-summary .company-name {
          margin: 0;
        }

        .company-summary .company-tag {
          font-size: 0.9rem;
          color: #8c8c8c;
          margin: 0;
        }

        .company-target {
          flex-basis: 35%;
        }

        .company-target .amount {
          text-align: center;
          margin: 0;
          padding: 0;
        }

        .target-indicator {
          background-color: #e5e5e5;
          border-radius: 10px;
          height: 8px;
          margin: 0;
          padding: 0;
        }

        .target-indicator .target-bar {
          width: 90%;
          height: 100%;
          background-color: #01bbc8;
          border-radius: 10px;
        }

        .target-indicator .target-label {
          position: relative;
          left: 100%;
          bottom: 100%;
          font-size: 0.9rem;
          padding-left: 8px;
        }

        .remaining-days {
          display: flex;
          align-items: center;
        }

        .days-container div {
          display: flex;
          align-items: center;
          padding: 0;
        }

        .days-container div p {
          margin: 0;
        }

        .days-container .label {
          color: #8c8c8c;
          font-size: 0.8rem;
          margin: 0;
        }

        .remaining-days .view-button {
          margin-left: 24px;
          cursor: pointer;
          background-color: #01bbc8;
          border-radius: 5px;
          border: none;
          color: white;
          padding: 8px 16px;
        }

        .remaining-days .view-button:hover {
          background-color: black;
          color: white;
        }

        /* Adjust for smartphone screen sizes. */
        @media only screen and (max-width: 600px) {
          .content {
            padding: 0;
          }

          .table-heading p {
            font-size: 0.8rem;
          }

          .company-summary img {
            width: 24px;
            height: 24px;
          }

          .company-summary div {
            padding: 0 0 0 8px;
          }

          .company-summary .company-name {
            margin: 0;
            font-size: 0.9rem;
          }

          .company-summary .company-tag {
            font-size: 0.5rem;
          }

          .company-target .amount {
            font-size: 0.9rem;
          }

          .target-indicator .target-label {
            visibility: hidden;
          }

          .remaining-days .view-button {
            margin-left: 8px;
          }
        }

        /* Adjust for tablet screen sizes. */
        @media only screen and (min-width: 600px) and (max-width: 800px) {
          .target-indicator .target-label {
            visibility: hidden;
          }
        }
      `}</style>
    </>
  );
}
