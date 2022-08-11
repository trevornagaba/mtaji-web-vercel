import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import axios from "axios";
import {
    Grid,
    Typography,
    Box
} from "@mui/material";

import { AppContext } from "/components/AppContext";
import Portfolio from "/components/Portfolio";
import Companies from "/components/Companies";
import PageTemplate from "../components/pageTemplate";
import FundWalletModal from "/components/FundWalletModal/FundWalletModal";

const HomePage = () => {

    const { isLoaded, isAuth, userDetails, companies, checkAuth } = useContext(AppContext);

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
        checkAuth()
        setUsers(userDetails)
        setPortfolio(userDetails.portfolio);
        setComps(companies);
    }, [isLoaded]);

    return (
        <PageTemplate hasNavbar={true} hasWrapper={true} isGreyBackgound={true} hasFooter={true}>
            {isLoaded?            
                <Grid
                    item
                    sx={{
                        width: "100%"
                    }}
                >
                    {/* Portfolio Card */}
                    <Portfolio
                        isLoaded={isLoaded}
                        userDetails={userDetails}
                    />
                    <Companies
                        isLoaded={isLoaded}
                        companies={comps}
                        size={"sm"}
                    />                
                </Grid>
            : "" }
    </PageTemplate>
    );
};

export default HomePage;
