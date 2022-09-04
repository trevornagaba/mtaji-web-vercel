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
            description: "Add Africa&apos;s next business giant to your portfolio"


        }
    ])
    return (
        <Grid
            container
            style={{
                padding: "5vh 10%",
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
                        padding: "5vh 0"
                    }}
                >
                    <p className={styles.sectionHeader}>
                    Mtaji is a marketplace for investors and <br/>founders in Africa
                    </p>
                    <div className={styles.underline} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
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
                            Early stage investment presents<br />
                            higher uncertainty.<br />
                            It could also bring higher return 
                        </p>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
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
                            Add Africa&apos;s next business giant(s) <br />
                            to your portfolio
                        </p>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
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
                        <p className={styles.title}>Enjoy the ride</p>
                        <p className={styles.description}>
                        Grab a front row seat <br /> on a startup journey. <br/>Get updates first.
                        </p>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Section3;
