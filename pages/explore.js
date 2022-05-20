import Link from "next/link";
import HomeNavBar from "../components/HomeNavBar";
import ExploreTableRow from "../components/ExploreTableRow";

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

          <ExploreTableRow />
          <ExploreTableRow />
          <ExploreTableRow />
          <ExploreTableRow />
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
