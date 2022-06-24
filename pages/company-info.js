import HomeNavBar from "../components/HomeNavBar";
import InvestCard from "../components/InvestCard";
import RaiseFunds from "../components/RaiseFunds";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CompanyInfo() {
    // Setup state management
    const [company, setCompany] = useState([]);
    useEffect(() => {
        getCompany();
    }, []);

    async function getCompany() {
        const response = await axios
            .get(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/companies/626fde9f814d1b197742cab2` //TO-DO: route from explore page should pass a company id
            )
            .then((result) => {
                setCompany(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async function makeInvestment() {
        const response = await axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/transactions`,
                {
                    amount: amount,
                    type: "company",
                    companyId: companyId, //TO-DO: Collect once sorted out the navigation/router to include companyId
                },
                { withCredentials: true },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((result) => {})
            .catch((error) => {
                console.log(error);
            });
    }

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
                {
                    <div className="video">
                        <iframe src={company.videoUrl}></iframe>
                    </div>
                }

                <InvestCard company={company} />
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

                    {<p className="description">{company.briefDescription}</p>}
                </div>

                {<InvestCard company={company} />}
            </div>

            <RaiseFunds />

            <style jsx>{`
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 0;
                    margin: 0 5vw;
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
                    color: #8c8c8c;
                }

                .share-button {
                    display: flex;
                    border: 2px solid #2518b8;
                    padding: 0 16px;
                    border-radius: 10px;
                    cursor: pointer;
                    height: 40px;
                    align-items: center;
                }

                .share-button img {
                    height: 24px;
                    width: 24px;
                    display: block;
                }

                .share-button p {
                    padding-left: 16px;
                    color: #2518b8;
                }

                .content-1 {
                    display: flex;
                    padding: 16px 0;
                    margin: 0 5vw;
                    justify-content: space-between;
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
                    padding: 16px 0;
                    margin: 0 5vw;
                    justify-content: space-between;
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
