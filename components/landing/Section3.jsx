import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Stack, Button, Typography, styled, Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "./Landing.module.css";
import cardIcon from "../../public/assets/idea.svg";
import landingImg from "../../public/assets/illustration_3.svg";
import whyMtajiImg from "../../public/assets/illustration_7.png";

const Section3 = () => {

    const [cards, setCards] = useState([
        {
            icon: cardIcon,
            title: "Diversify your portfolio",
            description: "Add Africa&sbquo;s next business giant to your portfolio"


        }
    ])
    return (
        <Grid
            container
            style={{
                padding: "0 10%",
                backgroundColor: "white",
            }}
        >
            <Grid
                container
                className={styles.section3}
                align="center"
            >
                <Grid
                    item
                    sx={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    style={{
                        padding: "10vh 0"
                    }}
                >
                    <p className={styles.sectionHeader}>
                    Mtaji is a marketplace for investors and <br/>founders in Africa
                    </p>
                    <div className={styles.underline} />
                </Grid>
                <Grid
                    item
                    sx={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    style={{
                        width: "100%"
                    }}
                >
                    <Box
                        className={styles.card}
                    >
                        <p align="center">
                            <img src="/assets/idea.svg" />
                        </p>
                        <p className={styles.title}>Diversify your portfolio</p>
                        <p className={styles.description}>
                            Add Africa&sbquo;s next business giant <br />
                            to your portfolio
                        </p>
                    </Box>
                </Grid>
                <Grid
                    item
                    sx={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    style={{
                        width: "100%"
                    }}
                >
                    <Box
                        className={styles.card}
                    >
                        <p align="center">
                            <img src="/assets/idea.svg" />
                        </p>
                        <p className={styles.title}>Be an early investor</p>
                        <p className={styles.description}>
                            While investment in early stage<br />
                            businesses presents higher uncertainty, <br />
                            it also provides an opportunity for <br />
                            a higher return.
                        </p>
                    </Box>
                </Grid>
                <Grid
                    item
                    sx={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    style={{
                        width: "100%"
                    }}
                >
                    <Box
                        className={styles.card}
                    >
                        <p align="center">
                            <img src="/assets/idea.svg" />
                        </p>
                        <p className={styles.title}>Grab a front row seat <br /> on a startup journey</p>
                        <p className={styles.description}>
                            Ride the highs and wither <br /> the lows with a founding team<br />
                            of your choice
                        </p>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Section3;
