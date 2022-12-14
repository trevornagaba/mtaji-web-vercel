import React, { useEffect, useState, useContext } from "react";
import {
    Grid,
    Item,
    Typography,
    Card,
    CardActions,
    CardContent,
} from "@mui/material";

import WalletCard from "./WalletCard";
import InvestmentsCard from "./InvestmentsCard";

const Portfolio = (props) => {
    const { isLoaded, userDetails, userPortfolioDetails } = props;
    // .portfolio);
    // 

    // Create our number formatter.
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    });

    // Setup state management
    const [user, setUsers] = useState([]);

    useEffect(() => {
        setUsers(userDetails);
    }, [isLoaded]);

    return (
        <Grid
            container
            rowSpacing={{ xs: 3, sm: 0 }}
            columnSpacing={{ xs: 0, sm: 3 }}
            xs={12}
            direction="row"
            sx={{
                paddingTop: "15px",
            }}
        >
            {/* Networth */}
            <Grid item xs={12} sm={12} md={4}>
                <WalletCard
                    isLoaded={isLoaded}
                    portfolio={userPortfolioDetails}
                />
            </Grid>
            {/* All Investments */}
            <Grid item xs={12} sm={12} md={8}>
                <InvestmentsCard
                    isLoaded={isLoaded}
                    portfolio={userDetails.portfolio}
                    userPortfolioDetails={userPortfolioDetails}
                />
            </Grid>
        </Grid>
    );
};

export default Portfolio;
