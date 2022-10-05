import React, { useEffect, useContext } from "react";
import { Grid, Stack, Button, Typography, styled, Box } from "@mui/material";
import styles from "./Landing.module.css";


import { AppContext } from "../AppContext";

import PageTemplate from "../pageTemplate";
import WhyMtaji from "./WhyMtaji";
import Section3 from "./Section3";
// import CompaniesSection from "./CompaniesSection";

import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";


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
        <PageTemplate
            hasNavbar={true}
            hasWrapper={false}
            hasFooter={true}
            hasRaiseFunds={true}
        >
            <Grid
                container
                style={{
                    padding: "15vh 10%",
                    minHeight: "100vh",
                    alignItems: "center",
                }}
            >
                {/* Section 1 - Invest in Africas next big company */}
              
                 
                <Grid
                    item
                    sx={
                        {
                            // flex: 4
                        }
                    }
                    xs={12}
                    sm={12}
                    md={7}
                    lg={7}
                    xl={7}
                    className={styles.tagline}
                >
                    <h1>
                        Invest in Africa&apos;s <br />
                        next big company
                    </h1>
                    <p style={{ padding: "15px 0" }}>
                        Be a part owner of a thriving business with as little as{" "}
                        <br />
                        UGX 50,000
                    </p>

                    <Grid
                        container
                        spacing={2}
                        
                        style={{
                            paddingTop: "10px",
                            display: "flex",
                            flexDirection: "row",
                            
                        }}
                    >
                        <Grid
                            item
                            style={{ paddingTop: "30px", flex: 4, maxWidth: '250px'}}
                        >
                            <Button
                                component="a"
                                href="/signup"
                                variant="contained"
                                style={{
                                    backgroundColor: "#2518B8",
                                    color: "white",
                                    textTransform: "none",
                                    height: "40px",
                                    
                                }}
                            >
                                Get started
                            </Button>
                            <Button
                                component="a"
                                href="https://forms.gle/6B9qZWfFKASvbu289"
                                variant="outlined"
                                style={{
                                    border: "1px #01BBC8 solid",
                                    color: "#01BBC8",
                                    textTransform: "none",
                                    height: "40px",
                                    marginLeft: "10px"
                                }}
                                target="_blank"
                            >
                                Raise funds
                            </Button>
                        </Grid>

                        <Grid
                        item
                        style={{flex: 1}}>
                            <img
                                src="/assets/arrow.svg"
                                alt="arrow"
                                
                                style={{
                                    maxWidth: "30%",
                                    
                                    marginLeft: "10px"
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    item
                    sx={
                        {
                            // flex: 4
                        }
                    }
                    xs={12}
                    sm={12}
                    md={5}
                    lg={5}
                    xl={4}
                    style={{
                        width: "100%",
                        padding: "5vh 0",
                    }}
                    align="right"
                >
                    <img
                        src="/assets/illustration_3.svg"
                        alt="happy investor"
                        style={{
                            width: "100%",
                        }}
                    />
                </Grid>
            </Grid>
 <Section3 />
            {/* Section 2 */}
            <Grid
                container
                spacing={4}
                style={{
                    padding: "10vh 10%",
                    backgroundColor: "white",
                }}
            >
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={4}
                    style={{
                        width: "100%",
                    }}
                >
                    <img
                        src="/assets/lady_with_laptop.svg"
                        alt="entreprenuer steering at a laptop screen"
                        style={{
                            width: "100%",
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={8}
                    xl={5}
                    style={{
                        margin: "0",
                    }}
                >
                    <WhyMtaji />
                </Grid>
            </Grid>
           

            {/* Section 3 */}
            {console.log(`check: ${companies.length}`)} 
                                                                           
                <Grid container className={styles.section4}>
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
                    
                </Grid>
            
        </PageTemplate>
    );
};

export default Landing;