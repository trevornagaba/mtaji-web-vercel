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
import styles from "./Landing.module.css";
import pointerImg from "../../public/assets/tagline_background.svg";
import landingImg from "../../public/assets/illustration_3.svg";
import whyMtajiImg from "../../public/assets/illustration_7.png";

import { AppContext } from "../AppContext"

import PageTemplate from "../pageTemplate";
import WhyMtaji from "./WhyMtaji";
import Section3 from "./Section3";

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

const Landing = () => {

    const { isLoaded, checkAuth, companies } = useContext(AppContext);

    useEffect(() => {
        checkAuth();
    }, []);

    
    // Create our number formatter.
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });

    return (
        <PageTemplate hasNavbar={true} hasWrapper={false} hasFooter={true}>
            <Grid
                container
                style={{
                    padding: "15vh 10%",
                    mimHeight: "100vh",
                    alignItems: "center"
                }}
            >

                {/* Section 1 */}
                <Grid
                    item
                    sx={12}
                    sm={12}
                    md={7}
                    lg={8}
                    xl={9}
                    className={styles.tagline}
                >
                    <h1>
                    Invest in Africa&apos;s <br />
                    next big company
                    </h1>
                    <p style={{ padding: '15px 0' }}>
                    Be a part owner of a thriving business with as little as <br/>UGX 50,000
                    </p>
                    <Stack
                        spacing={2}
                        direction="row"
                        style={{ paddingTop: "30px" }}
                    >
                    <Button
                        component="a"
                        href="/signup"
                        variant="contained"
                        style={{ backgroundColor: "#2518B8", color: "white", textTransform: "none", height: "40px" }}
                    >Get started</Button>
                    <Button
                        component="a"
                        href="/invest"
                        variant="outlined"
                        style={{ border: "1px #01BBC8 solid", color: "#01BBC8", textTransform: 'none', height: "40px" }}
                    >Raise funds</Button>
                    </Stack>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={5}
                    lg={4}
                    xl={3}
                    style={{
                        width: "100%",
                        padding: "5vh 0"
                    }}
                    align="right"
                >
                    <Image
                        src={landingImg}
                        alt="image 1"
                        style={{
                            width: "100%"
                        }}
                    />
                </Grid>
            </Grid>

            {/* Section 2 */}
            <Grid
                container
                style={{
                    padding: "15vh 10%",
                    backgroundColor: "#f7f7f7"
                }}
            >
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    style={{
                        width: "100%",
                    }}
                >
                        <Image
                            src={whyMtajiImg}
                            alt="image 1"
                            style={{
                                width: "100%"
                            }}
                        />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    style={{
                        margin: "0",
                    }}
                >
                    <WhyMtaji />
                </Grid>
            </Grid>
            <Section3/>

            {/* Section 3 */}
            {companies.length != 0?
                <Grid
                    container
                    className={styles.section4}
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
                            padding: "0"
                        }}
                    >
                        <p className={styles.sectionHeader}>
                            Companies currently raising <br/>capital on mtaji
                        </p>
                        <div className={styles.underline2} />
                    </Grid>
                    {companies?.map((company, index) => (
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
                </Grid>
            : ""}
        </PageTemplate>
    )
}

export default Landing;
