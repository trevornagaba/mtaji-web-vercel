import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { Grid, Typography, Box } from "@mui/material";

import { AppContext } from "/components/AppContext";
import Portfolio from "/components/Portfolio";
import Companies from "/components/Companies";
import PageTemplate from "../components/pageTemplate";
import SubscribeCard from "../components/subscribeToMailList";
import FundWalletModal from "/components/FundWalletModal/FundWalletModal";

const HomePage = () => {
    const {
        isLoaded,
        isAuth,
        userDetails,
        companies,
        checkAuth,
        userPortfolioDetails,
        getUserPortfolioDetails,
    } = useContext(AppContext);

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
    const [comps, setComps] = useState([]);
    // Setup to handle modal state
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        checkAuth();
        setUsers(userDetails);
        getUserPortfolioDetails();
                setComps(companies);
    }, [isLoaded]);

    // console.log(userPortfolioDetails);
    
    return (
        <PageTemplate
            hasNavbar={true}
            hasWrapper={true}
            isGreyBackgound={true}
            hasFooter={true}
            hasRaiseFunds={true}
        >
            {isLoaded ? (
                <Grid
                    item
                    xs={{
                        width: "100%",
                    }}
                >
                    {/* Portfolio Card */}
                    <Portfolio
                        isLoaded={isLoaded}
                        userDetails={userDetails}
                        userPortfolioDetails={userPortfolioDetails}
                    />
                    <Companies
              />
                </Grid>
            ) : (
                ""
            )}
        </PageTemplate>
    );
};

export default HomePage;
