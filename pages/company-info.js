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
        <div>
            <HomeNavBar />
            <main>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-red-300">
                    <p>Company Title</p>
                </div>
            </main>
        </div>
    );
}
