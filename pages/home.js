import Link from "next/link";
import HomeNavBar from "../components/HomeNavBar";

export default function HomePage() {
  return (
    <>
      <HomeNavBar />

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

              <Link href="/explore">
                <button>Explore</button>
              </Link>
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

      <style jsx>{`
        * {
          color: #09062d;
        }

        .portfolio-section .header {
          padding: 16px 16px 0;
          font-size: 22px;
          font-weight: 600;
        }

        .portfolio {
          display: flex;
          padding: 16px;
          justify-content: space-between;
        }

        .cash-portfolio {
          background-color: white;
          border-radius: 24px;
          flex-basis: 40%;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .cash-portfolio .balance {
          text-align: center;
          font-size: 48px;
          font-weight: 700;
        }

        .cash-portfolio .buttons {
          display: flex;
          justify-content: center;
        }

        .cash-portfolio .buttons button {
          padding: 16px 24px;
          border: none;
          margin: 0 16px;
          border-radius: 10px;
          cursor: pointer;
        }

        .cash-portfolio .buttons button:hover {
          color: white;
          background-color: #01bbc8;
        }

        .cash-portfolio .buttons .fund-button {
          color: white;
          background-color: #01bbc8;
        }

        .cash-portfolio .buttons .fund-button:hover {
          background-color: black;
        }

        .investments-portfolio {
          background-color: white;
          border-radius: 24px;
          flex-basis: 54%;
          padding: 24px;
          margin-left: 16px;
        }

        .investments-portfolio .header {
          display: flex;
          justify-content: space-between;
          padding-bottom: 16px;
          align-items: center;
        }

        .investments-portfolio .header button {
          border: none;
          cursor: pointer;
          padding: 16px 24px;
          border-radius: 10px;
          color: white;
          background-color: #01bbc8;
          height: 50%;
        }

        .investments-portfolio .header button:hover {
          background-color: black;
        }

        .investments-portfolio .investment {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .investment .company {
          display: flex;
          align-items: center;
        }

        .investment .company img {
          width: 32px;
          height: 32px;
        }

        .investment .balance .amount {
          margin: 0;
          line-height: 12px;
          text-align: end;
        }

        .investment .balance .label {
          margin: 0;
          font-size: 0.8rem;
          text-align: end;
          color: #8c8c8c;
        }

        .companies-section .header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
        }

        .companies-section .header .title {
          padding: 16px 16px 0;
          font-size: 24px;
          font-weight: 600;
        }

        .companies-section .header .link {
          padding-right: 24px;
          cursor: pointer;
          color: #2518b8;
        }

        .companies-section .header .link:hover {
          color: #01bbc8;
        }

        .companies {
          display: flex;
          padding: 16px;
          justify-content: left;
          overflow: auto;
        }

        .companies .company-card {
          background-color: white;
          border-radius: 30px;
          flex-basis: 28%;
          padding: 32px;
          margin: 0 16px;
        }

        .company-card img {
          display: block;
          width: 30%;
          margin: auto;
        }

        .company-card .company-name {
          font-weight: bold;
          text-align: center;
        }

        /* Adjust for smartphone screen sizes. */
        @media only screen and (max-width: 600px) {
          .portfolio {
            flex-direction: column;
          }

          .cash-portfolio {
            margin-bottom: 16px;
          }

          .cash-portfolio .buttons button {
            padding: 8px 16px;
            margin: 0 8px;
          }

          .investments-portfolio {
            margin-left: 0;
          }

          .investments-portfolio .header button {
            padding: 8px 16px;
          }

          .investments-portfolio .header,
          .investments-portfolio .investment {
            font-size: 0.8rem;
            flex-wrap: wrap;
          }

          .companies {
            justify-content: left;
          }

          .companies .company-card {
            min-width: 60%;
            max-width: 60%;
          }

          .company-card img {
            width: 70%;
          }
        }

        /* Adjust for tablet screen sizes. */
        @media only screen and (min-width: 600px) and (max-width: 800px) {
          .portfolio {
            flex-direction: column;
          }

          .cash-portfolio {
            margin-bottom: 16px;
          }

          .investments-portfolio {
            margin-left: 0;
          }

          .companies {
            justify-content: left;
          }

          .companies .company-card {
            min-width: 35%;
            max-width: 35%;
          }
        }
      `}</style>
    </>
  );
}
