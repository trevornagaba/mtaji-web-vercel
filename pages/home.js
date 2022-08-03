import Link from "next/link";
import withAuth from "../components/HOC/withAuth";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
    Grid,
} from "@mui/material";
import { Navbar } from "../components";
import styles from "/styles/landing/CompaniesSection.module.css";
import PageTemplate from "../components/pageTemplate";
import FundWalletModal from "/components/FundWalletModal/FundWalletModal";

const HomePage = () => {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });
    // Create value to hold the sum of the value of the portfolio
    const portfolioValue = 0;
    // Setup state management
    const [user, setUsers] = useState([]);
    const [portfolio, setPortfolio] = useState([]);
    const [company, setCompanies] = useState([]);
    // Setup to handle modal state
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        getUser();
        getPortfolio();
        getCompanies();
    }, []);

    // Define the close modal arrow method
    const closeModal = () => {
        setIsOpen(false);
    };

    // Define the open modal arrow method
    const openModal = () => {
        setIsOpen(true);
    };

    async function getUser() {
        const response = await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users`, {
                withCredentials: true,
            })
            .then((result) => {
                // TO-DO: Update after sorting out auth
                if (result.data == "Please login") {
                    setUsers("$");
                } else {
                    setUsers(result.data);
                }
            })
            .catch((error) => {
                console.log(error);
                setUsers("$");
            });
    }

    async function getPortfolio() {
        const response = await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users`, {
                withCredentials: true,
            })
            .then((result) => {
                // TO-DO: Update after sorting out auth
                if (result.data == "Please login") {
                    setPortfolio("$");
                } else {
                    setPortfolio(result.data.portfolio);
                }
            })
            .catch((error) => {
                console.log(error);
                setPortfolio("$");
            });
    }

    async function getCompanies() {
        const response = await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/companies`, {
                withCredentials: true,
            })
            .then((result) => {
                console.log(typeof result);
                console.log(result.data);
                // TO-DO: Update after sorting out auth
                if (result.data == "Please login") {
                    setCompanies("$");
                } else {
                    setCompanies(result.data);
                }
            })
            .catch((error) => {
                console.log(error);
                setCompanies("$");
            });
    }

    return (
        <PageTemplate hasNavbar={true} hasWrapper={false} hasFooter={true}>
            <Grid
                item
                style={{
                    padding: "15vh 10%",
                    mimHeight: "100vh",
                    width: '100%'
                }}
                align={"center"}
            >
            <div className="portfolio-section">
                {/* Removed the header portfolio, it was redundant */}
                <div>
                    {" "}
                    <p className="header">Portfolio</p>
                </div>

                <div className="portfolio">
                    <div className="cash-portfolio">
                        <p className="header">Cash</p>
                        {/* Removed the pargraph that holds balance element with a span to reduce the padding */}
                        {
                            <span className="balance">
                                {formatter.format(user.cashBalance)}
                            </span>
                        }

                        <div className="buttons">
                            <button
                                type="button"
                                onClick={openModal}
                                className="fund-button"
                            >
                                Fund
                            </button>
                            <button>Withdraw</button>
                        </div>
                    </div>

                    <div className="investments-portfolio">
                        <div className="header">
                            <p>All Investments</p>
                            {/* The function below iterates over the portfolio object and computes a sum of it's total value */}
                            {/* This value is stored hidden html elements during the iteration and summation and finaly ready in the <p> element after */}
                            {portfolio.map((portfolio, index) => (
                                <div key={index} className="investment">
                                    <p hidden>
                                        {
                                            (portfolioValue =
                                                parseInt(portfolioValue) +
                                                parseInt(portfolio.amount))
                                        }
                                    </p>
                                </div>
                            ))}
                            <p>{formatter.format(portfolioValue)}</p>
                        </div>

                        <div>
                            {portfolio.map((portfolio, index) => (
                                <div key={index} className="investment">
                                    <div className="company">
                                        <img
                                            src="/assets/logo_in_card.svg"
                                            alt="logo"
                                        />
                                        <p>{portfolio.companyName}</p>
                                    </div>

                                    <p className="industry">
                                        {portfolio.industry}
                                    </p>

                                    <div className="balance">
                                        <p className="amount">
                                            {formatter.format(portfolio.amount)}
                                        </p>
                                        {/* <p className="label">
                                                {portfolio.debtVsEquity}
                                            </p> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="companies-section">
                <div className="header">
                    <p className="title">Currently Raising</p>
                </div>
                <div className="companies">
                    {company.map((company, index) => (
                        <div key={index} className="company-card">
                            <Link href={`/company/${company._id}`}>
                                <div>
                                    <img
                                        src="/assets/logo_in_card.svg"
                                        alt="logo"
                                    />
                                    <p className="company-name">
                                        {company.name}
                                    </p>
                                    <p className="company-summary">
                                        {company.briefDescription}
                                    </p>
                                    <p className={styles.companyTarget}>
                                        {formatter.format(company.targetAmount)}
                                    </p>
                                    <div className={styles.targetDeadline}>
                                        <p className={styles.endsInLabel}>
                                            Ends in:
                                        </p>
                                        <p className={styles.timeLeft}>
                                            21h: 30m: 09s
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {/* Modals */}
            <FundWalletModal
                isOpen={isOpen}
                openModal={openModal}
                closeModal={closeModal}
            />

            <style jsx>{`
                * {
                    color: #09062d;
                }

                .home-page {
                    background-color: #f7f7f7;
                    background-url: ("/assets/Ellipse 9.svg");
                    mix-blend-mode: overlay;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                }

                .portfolio-section {
                    margin: 0 12vw;
                }

                .portfolio-section .header {
                    font-size: 16px;
                    font-weight: 600;
                    padding: 7px;
                }

                .portfolio {
                    display: flex;
                    justify-content: space-between;
                }

                .cash-portfolio {
                    background-color: #ffffff;
                    border-radius: 20px;
                    flex-basis: 40%;
                    padding: 0px 24px 24px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .cash-portfolio .balance {
                    text-align: center;
                    font-size: 24px;
                    font-weight: 700;
                    padding: 0px 24px 12px;
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
                    background-color: #ffffff;
                    border-radius: 20px;
                    flex-basis: 54%;
                    padding: 0px 24px 24px;
                    margin-left: 16px;
                }

                .investments-portfolio .header {
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 16px;
                    align-items: center;
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

                .companies-section {
                    margin: 0 5vw;
                    padding-bottom: 32px;
                }

                .companies-section .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    flex-wrap: wrap;
                }

                .companies-section .header .title {
                    padding: 16px;
                    font-size: 16px;
                    font-weight: 600;
                }

                .companies-section .header .link {
                    cursor: pointer;
                    color: #2518b8;
                }

                .companies-section .header .link:hover {
                    color: #01bbc8;
                }

                .companies {
                    display: flex;
                    justify-content: left;
                    overflow: auto;
                }

                .companies .company-card {
                    background-color: #ffffff;
                    border-radius: 30px;
                    min-width: 290px;
                    max-width: 290px;
                    padding: 32px;
                    margin-right: 2vw;
                    margin-bottom: 2vw;
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
                }
            `}</style>
        </Grid>
    </PageTemplate>
    );
};

export default withAuth(HomePage);
