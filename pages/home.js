import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { Grid, Typography, Box } from "@mui/material";

import { AppContext } from "/components/AppContext";
import Portfolio from "/components/Portfolio";
import Companies from "../components/Companies";
import PageTemplate from "../components/pageTemplate";
import SubscribeCard from "../components/subscribeToMailList";
import FundWalletModal from "/components/FundWalletModal/FundWalletModal";
import Head from "next/head";

const HomePage = () => {
    const {
        userPortfolioDetails,
        checkAuth,
        isLoaded,
        isAuth,
        userDetails,
        companies,
        getUserPortfolioDetails,
    } = useContext(AppContext);
    
    //Get the latest userportfolio details
    //  const isLoaded = true;

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
        const [comps, setComps] = useState([]);
    // Setup to handle modal state
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        
        // checkAuth().then((result)=>{
        //     getUserPortfolioDetails();
        // });
        //getUserPortfolioDetails();
        
        // setUsers(userDetails);
        
                // setComps(companies);
    });
    
    
    return (
        <PageTemplate
            hasNavbar={true}
            hasWrapper={true}
            isGreyBackgound={true}
            hasFooter={true}
            hasRaiseFunds={true}
        >
            <Head>
                <title>Home page</title>
                <meta
                    name="description"
                    content="Home page"
                />
            </Head>

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
                    <Companies />
                </Grid>
            ) : (
                ""
            )}
        </PageTemplate>
    );
};

export default HomePage;
