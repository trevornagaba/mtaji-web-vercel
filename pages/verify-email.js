import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import jwt_decode from 'jwt-decode';
import Image from "next/image";
import {
    Grid,
    Box,
    Typography,
    TextField,
    Button,
    LinearProgress,
    Alert
} from "@mui/material";
import navStyles from "../components/Header/Header.module.css";

const VerifyEmail = () => {

    const [sent, setSent] = useState(false)
    const [sending, setSending] = useState(false)
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)
    const [actionMsg, setActionMsg] = useState("")

    const emailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleEmail = async () => {
        setSent(false)
        setSending(true)
        setError(false)
        setActionMsg("")
        if(email==="") {
            setError(true)
            setActionMsg("Please enter your email")
        } else {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/verify-email`, {
                    headers: {
                    'Content-Type': 'Application/json'
                    },
                    email: email
                }
            )
            .then((result) => {
                setSent(true)
                setActionMsg(result.data.message)
            })
            .catch(error => {
                setError(true)
                setActionMsg("Invalid email address")
            });
        }
        setSending(false)
    }


    return (
        <Grid
            container
        >
            <Grid
                item
                xs={12}
                sm={12}
                md={8}
                lg={6}
                xl={6}
                style={{
                    width: "100%",
                    backgroundColor: "#928BDB",
                    padding: "0 5vw",
                    paddingBottom: "5%",
                }}
                align={"center"}
            >
                
                <Typography
                    component="a"
                    href="/"
                    display="inline-flex"
                    style={{
                        width: "100%",
                        marginTop: "50px",
                        alignItems: "left"
                    }}
                >
                    <Image
                        src="/assets/logo.svg"
                        alt="logo"
                        width={35}
                        height={35}
                    />
                    <span
                        className={navStyles.appName}
                        style={{
                            color: "#2518B8",
                            fontSize: "22px",
                            fontWeight: "550"
                        }}
                    >mtaji</span>
                </Typography>
                <Box
                    style={{
                        width: "85%",
                        backgroundColor: "white",
                        borderRadius: "20px",
                        marginTop: "10%",
                        overflow: "hidden",
                        paddingBottom: "20px",
                        color: "#01BBC8"
                    }}
                >
                    <Typography
                        variant="h5"
                        style={{
                            backgroundColor: "#2518B8",
                            padding: "3% 0",
                            color: "#ffffff",
                            fontSize: '19.5px',
                            fontFamily: "'Poppins', Courier, monospace"
                        }}
                    >
                        Forgot Password
                    </Typography>
                    {sending?<LinearProgress color="inherit"/>:""}
                    <Typography
                        style={{
                            color: "#000000",
                            fontSize: "16px",
                            fontFamily: "'Poppins', Courier, monospace",
                            fontWeight: "400",
                            padding: "40px 10%",
                        }}
                        align="left"
                    >
                        Please provide your email address for us to send you a reset link
                    </Typography>
                    {sent?
                        <Alert
                            severity="success"
                            style={{
                                width: "80%",
                                marginBottom: "15px"
                            }}
                        >{actionMsg}</Alert>
                    :""}
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        placeholder="example@gmail.com"
                        type="email"
                        value={email}
                        onChange={emailChange}
                        error={error}
                        helperText={error?actionMsg:""}
                        style={{
                            width: "80%",
                        }}
                    />
                    <Typography
                        style={{
                            marginTop: "10px",
                            color: "#2518B8",
                            fontSize: "18px",
                        }}
                        align="center"
                    >
                        <Button
                            disabled={sending}
                            variant="contained"
                            style={{
                                backgroundColor: "#2518B8",
                                marginTop: "20px"
                            }}
                            onClick={handleEmail}
                        >Send Password Reset</Button>
                    </Typography>
                    <Typography
                        style={{
                            marginTop: "10px",
                            color: "#2518B8",
                            fontSize: "17px",
                            padding: "0 8%"
                        }}
                        align="left"
                    >                     
                        <strong>NOTE:</strong><br/>
                        <small>A <strong>Password Reset Link</strong> will be sent to the email you provide, and this link expires after <strong>24 hours</strong>.</small>
                    </Typography>
                    <Typography
                        style={{
                            marginTop: "10px",
                            color: "#2518B8",
                            fontSize: "18px",
                            paddingRight: "8%"
                        }}
                        align="right"
                    >
                        <small align="right">
                            Go back to <a href={`../login`}>
                            <Button variant="outlined" size="small" style={{ color: "#ffffff", border: "1px #01bbc8 solid", backgroundColor: "#01bbc8" }}>Login</Button>
                            </a>
                        </small>
                    </Typography>
                </Box>
            </Grid>
            <Grid
                item
                sx={{
                    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                }}
                xs={12}
                sm={12}
                md={4}
                lg={6}
                xl={6}
                style={{
                    backgroundColor: "white",
                    height: "100vh",
                    backgroundImage: "url('/assets/verify-email.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >

            </Grid>
        </Grid>
    )
}

export default VerifyEmail;
