import HomeNavBar from "../components/HomeNavBar";
import InvestCard from "../components/InvestCard";
import RaiseFunds from "../components/RaiseFunds";
import Footer from "../components/Footer";

export default function CompanyInfo() {
  return (
    <>
      <HomeNavBar />

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

        <InvestCard />
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

        <InvestCard />
      </div>

      <RaiseFunds />
      <Footer />

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
