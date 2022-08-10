import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
    Grid,
    Stack,
    Button,
    Typography,
    styled,
    Box
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "../landing/Landing.module.css";

import { AppContext } from "../AppContext"

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const Str = require('@supercharge/strings')

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#01BBC8' : '#01BBC8',
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

return (
    isLoaded?
        <Grid
            container
            sx={{
                width: '80vw'
            }}
        >
            <Grid
                item
                sx={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                align="center"
                style={{
                    paddingTop: "20px"
                }}
            >
                {props.size==="sm"?
                    <>
                        <p className={styles.sectionHeader} sx={{ contentAlign: "left" }}>
                            Companies currently raising capital on mtaji
                        </p>
                        <div className={styles.underline2} />
                    </>
                :
                    <>
                        <p className={styles.sectionHeader}>
                            Companies currently raising <br/>capital on mtaji
                        </p>
                    </>
                }
            </Grid>
            {companies.map((company, index) => (
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
                <Box
                    className={styles.companyCardBox}
                >
                    <Link href={`/company/${company._id}`}>
                        <img src="/assets/companyLogo.svg" width={80} />
                    </Link>
                    <Typography
                        variant="h5"
                        style={{
                            margin: "10px 0",
                            fontFamily: "Poppins",
                            fontWeight: "500"
                        }}
                    >
                        {company.name}
                    </Typography>
                    <Typography
                        style={{                                
                            textAlign: "left"
                        }}
                    >
                        {Str(company.briefDescription).limit(100, '...').get()}
                    </Typography>
                    
                    <Typography style={{ padding: "10px 0", lineHeight: "22px" }} align={"left"}>
                        <small>Raising</small><br/>
                        <strong style={{ fontSize: "22px" }}>{formatter.format(company.targetAmount)}</strong><br/>
                        <small>Ends in: <span style={{ color: "red" }}>21h:30min:15sec</span></small>
                    </Typography>

                    <BorderLinearProgress variant="determinate" value={(company.amountRaised/company.targetAmount)*100} label={true}/>
                    <small style={{ color: "#01BBC8" }}>{Math.round((company.amountRaised/company.targetAmount)*100)}%</small>
                </Box>
                </Grid>
            ))}
        </Grid> : ""
    )
}

export default Companies;
