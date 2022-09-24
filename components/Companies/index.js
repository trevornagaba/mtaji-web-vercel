import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Grid, Stack, Button, Typography, styled, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "../landing/Landing.module.css";

import { AppContext } from "../AppContext";

import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";

const Str = require("@supercharge/strings");

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === "light" ? "#01BBC8" : "#01BBC8",
    },
}));

const Companies = (props) => {
    const { isLoaded, companies } = useContext(AppContext);

    // Create our number formatter.
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });

    var calc_days_left = (end_date) => {
        var end_date_strToDate = new Date(end_date);
        var time_left = end_date_strToDate.getTime() - new Date().getTime();
        var days_left = time_left / (1000 * 3600 * 24);
        var hours_left = (days_left % 1) * 24;
        var mins_left = (hours_left % 1) * 60;
        var sec_left = (mins_left % 1) * 60;

        //var duration_left= days_left >= 1 ? ""+days_left.toFixed(0) + " days" : ""+ hours_left.toFixed(0)+"h:"+mins_left.toFixed(0)+"min:"+sec_left.toFixed(0)+"sec";

        var duration_left =
            days_left >= 1
                ? "" + days_left.toFixed(0) + " days"
                : "" +
                  hours_left.toFixed(0) +
                  "h:" +
                  mins_left.toFixed(0) +
                  "min";

        return duration_left;
    };

    return (
        <Grid container>
            <Grid
                item
                sx={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                align="center"
                style={{
                    padding: "0",
                }}
            >
                <p className={styles.sectionHeader}>
                    Companies raising soon
                </p>
                <div className={styles.underline2} />
            </Grid>
            {companies?.map((company, index) => {
                return company.isRaising == "true"?(
                <Grid
                    key={index}
                    item
                    sx={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    className={styles.companyCard}
                    align="center"
                    
                >
                    <a href={`/company/${company._id}`}>
                        <Box className={styles.companyCardBox}>
                            <img src={`${company.logo}`} width={80} />
                            {/* <img src={company.logo} width={80} /> */}

                            <Typography
                                variant="h5"
                                style={{
                                    margin: "15px 0px",
                                    fontFamily: "Poppins",
                                    fontWeight: "500",
                                }}
                            >
                                {company.name}
                            </Typography>

                            <Typography
                                style={{
                                    textAlign: "left",
                                    fontFamily: "Poppins",
                                    color: "#666666",
                                    margin: "10px 0px",
                                    fontSize: "0.9rem",
                                }}
                            >
                                {Str(company.briefDescription)
                                    .limit(100, "...")
                                    .get()}
                            </Typography>

                            <Typography
                                style={{
                                    padding: "10px 0",
                                    lineHeight: "22px",
                                    color: "#666666",
                                    fontFamily: "Poppins",
                                }}
                                align={"left"}
                            >
                                <small>Raising</small>
                                <br />
                                <strong
                                    style={{
                                        fontSize: "1.25rem",
                                        color: "#09062D",
                                    }}
                                >
                                    {formatter.format(company.targetAmount)}
                                </strong>
                                <br />
                                <small>
                                    Opens in: {" "}
                                    <span style={{ color: "#FE8686" }}>
                                        {calc_days_left(
                                            company.raiseTargetDate
                                        )}
                                    </span>
                                </small>
                                {/* {console.log(
                                    `check: ${calc_days_left(
                                        company.raiseTargetDate
                                    )}`
                                )} */}
                            </Typography>

                            <BorderLinearProgress
                                variant="determinate"
                                value={
                                    (company.amountRaised /
                                        company.targetAmount) *
                                    100
                                }
                                label={true}
                            />
                            <small style={{ color: "#01BBC8" }}>
                                {Math.round(
                                    (company.amountRaised /
                                        company.targetAmount) *
                                        100
                                )}
                                %
                            </small>
                        </Box>
                    </a>
                </Grid>
            ): ''})}
        </Grid>
    ); 
   
};

export default Companies;
