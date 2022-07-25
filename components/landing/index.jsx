import { useEffect, useState } from "react";
import axios from "axios";
import {
    Grid,
    Stack,
    Button,
    Typography,
    styled 
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "./Landing.module.css";
import pointerImg from "../../public/assets/tagline_background.svg"

import WhyMtaji from "./WhyMtaji";

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

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

const LandingPage = () => {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });

    // Setup state management
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        getCompanies();
    }, []);

    async function getCompanies() {
        const response = await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/companies`, {
                withCredentials: true,
            })
            .then((result) => {
                console.log(typeof result);
                console.log(result.data);
                // TO-DO: Update after sorting out auth
                if (result.data == "Please login") {
                    setCompanies("$");
                } else {
                    setCompanies(result.data);
                }
            })
            .catch((error) => {
                console.log(error);
                setCompanies("$");
            });
    }

    return (
        <>
            <Grid
                container
                style={{
                    padding: "10vw 10%",
                    height: "100vh"
                }}
            >

                {/* Section 1 */}
                <Grid
                    item
                    sx={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    className={styles.tagline}
                >
                    <h1>
                    Invest in Africa&apos;s <br />
                    next big company
                    </h1>
                    <p>
                    Be a part owner of a thriving business with as little as <br/>UGX 50,000
                    </p>
                    <Stack
                    spacing={3}
                    direction="row"
                    style={{ paddingTop: "30px" }}
                    >
                    <Button
                        component="a"
                        href="/signup"
                        variant="contained"
                        style={{ backgroundColor: "#2518B8", color: "white", textTransform: "none", fontSize: "16px", height: "40px" }}
                    >Get started</Button>
                    <Button
                        component="a"
                        href="/invest"
                        variant="outlined"
                        style={{ border: "1px #01BBC8 solid", color: "#09062D", textTransform: 'none', fontSize: "16px", height: "40px" }}
                    >Raise funds</Button>
                    <Button
                        style={{ pointer: "none", height: "40px" }}
                    >
                        <Image
                        src={pointerImg}
                        alt="Pointer"
                        width={100}
                        style={{
                            cursor: "none"
                        }}         
                        />
                    </Button>
                    </Stack>
                </Grid>
                <Grid
                    item
                    sx={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    className={styles.proposition}
                />
            </Grid>

            {/* Section 2 */}
            <Grid
                container
                style={{
                    padding: "2vw 10%"
                }}
            >
                <Grid
                    item
                    sx={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    style={{
                        padding: "10vw 10%"
                    }}
                    className={styles.section2Img}
                />
                <Grid
                    item
                    sx={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                >
                    <div className={styles.benefits}>
                        <WhyMtaji />
                    </div>
                </Grid>
                <Grid
                    item
                    sx={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    align="center"
                >
                    <p className={styles.sectionHeader}>
                        Mtaji is a marketplace for investors and <br/> founders in Africa
                    </p>
                    <div className={styles.underline} />
                    <div className={styles.section}>
                        <div className={styles.card}>
                            <img src="/assets/idea.svg" />
                            <p className={styles.title}>Diversify your portfolio</p>
                            <p className={styles.description}>
                            Add Africa's next business giant <br />
                            to your portfolio
                            </p>
                        </div>
                        <div className={styles.card}>
                            <img src="/assets/idea.svg" />
                            <p className={styles.title}>Be an early investor</p>
                            <p className={styles.description}>
                            While investment in early stage<br />
                            businesses presents higher uncertainty, <br />
                            it also provides an opportunity for <br />
                            a higher return.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <img src="/assets/idea.svg" />
                            <p className={styles.title}>Grab a front row seat <br /> on a startup journey</p>
                            <p className={styles.description}>
                            Ride the highs and wither <br /> the lows with a founding team<br />
                            of your choice

                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>

            {/* Section 3 */}
            <Grid
                container
                className={styles.section3}
            >
                <Grid
                    item
                    sx={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    style={{
                        marginBottom: "-150px",
                        height: "0"
                    }}
                    align="center"
                >
                    <p className={styles.sectionHeader}>
                        Companies currently raising <br/>capital on mtaji
                    </p>
                    <div className={styles.underline2} />
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
                    <div>
                        <Link href={`/company/${company._id}`}>
                            <img src="/assets/tubayo_logo.png" width={80} />
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
                            {company.briefDescription}
                        </Typography>
                        
                        <Typography style={{ padding: "10px 0", lineHeight: "22px" }} align={"left"}>
                            <small>Raising</small><br/>
                            <strong style={{ fontSize: "22px" }}>{formatter.format(company.targetAmount)}</strong><br/>
                            <small>Ends in: <span style={{ color: "red" }}>21h:30min:15sec</span></small>
                        </Typography>

                        <BorderLinearProgress variant="determinate" value={80} />
                    </div>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default LandingPage;
