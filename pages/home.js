import Link from "next/link";
import withAuth from "../components/HOC/withAuth";
import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useEffect, useState } from "react";
import { Navbar } from "../components";
import styles from "/styles/landing/CompaniesSection.module.css";

const HomePage = () => {
    // Setup state management
    const [user, setUsers] = useState([]);
    const [portfolio, setPortfolio] = useState([]);
    const [company, setCompanies] = useState([]);
    useEffect(() => {
        getUser();
        getPortfolio();
        getCompanies();
    }, []);

    const config = {
        public_key: `${process.env.NEXT_PUBLIC_FLW_PUBK}`,
        tx_ref: uuidv4(),
        amount: 50000,
        currency: "UGX",
        payment_options: "card, mobilemoneyuganda",
        meta: {
            consumer_id: 23,
            consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
            email: "trevornagaba@gmail.com",
            phone_number: "08102909304",
            name: "Rose DeWitt Bukater",
        },
        customizations: {
            title: "mtaji",
            description: "Investment in Tubayo",
            logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
        },
    };
    const handleFlutterPayment = useFlutterwave(config);

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

    function handeCallBack() {
        // TO-DO: Repace with axios request, test content-type is still
        const response = axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/transactions`,
                {
                    amount: config.amount,
                    id: config.tx_ref,
                    type: "cash",
                },
                { withCredentials: true },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        closePaymentModal(); // this will close the modal programmatically
    }

    return (
        <>
            <Navbar />
            {/* TO-DO: Add parent component to handle background */}
            <div className="home-page">
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
                                    ${user.cashBalance}
                                </span>
                            }

                            <div className="buttons">
                                <button
                                    type="button"
                                    onClick={() => {
                                        handleFlutterPayment({
                                            callback: (response) => {
                                                console.log(response);
                                                try {
                                                    handeCallBack();
                                                } catch (error) {
                                                    console.log(error);
                                                }
                                            },
                                            onClose: () => {},
                                        });
                                    }}
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
                                {/*TO-DO: Replace the explore button below with function to some value of current company portfolio*/}
                                <p>$300</p>
                            </div>

                            <div>
                                {console.log(portfolio)}
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
                                                {portfolio.amount}
                                            </p>
                                            <p className="label">
                                                {portfolio.debtVsEquity}
                                            </p>
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
                            <Link href="/company-info/">
                                <div key={index} className="company-card">
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
                                        UGX 50M
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
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                * {
                    color: #09062d;
                }

                .home-page {
                    background-color: #e5e5e5;
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
        </>
    );
};

export default withAuth(HomePage);
