import React, { useEffect, useState, useContext } from "react";
import {
    Grid,
    Typography,
    Card,
    CardActions,
    CardContent
} from "@mui/material";

import WalletCard from "./WalletCard"
import InvestmentsCard from "./InvestmentsCard"


const Portfolio = (props) => {

    const { isLoaded, userDetails } = props;

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
        setUsers(userDetails)
    }, [isLoaded]);

    return (
        <Grid
            item

            sx={{
                mimHeight: "100vh",
                width: '80vw'
            }}
        >
            <Typography
                variant="h6"
                style={{
                    fontWeight: "bold",
                    paddingBottom: "10px"
                }}

            >
                Portfolio
            </Typography>
            <Grid
                container
                sx={{
                    display: "flex"
                }}
            >
                <Grid
                    item
                    sx={{
                        flex: 2
                    }}
                >
                    <WalletCard balance={formatter.format(user.cashBalance)} />
                </Grid>
                <Grid
                    item
                    sx={{
                        flex: 6,
                        paddingLeft: "4%"
                    }}
                >
                    <InvestmentsCard
                        isLoaded={isLoaded}
                        portfolio={userDetails.portfolio}
                    />
                </Grid>
            </Grid>
            
        </Grid>
    );
};

export default Portfolio;
