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
import CircularProgress from '@mui/material/CircularProgress';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import BlockIcon from '@mui/icons-material/Block';
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
                setActionMsg(error.response.data.message)
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
                    backgroundColor: "#2518B8",
                    height: "100vh",
                    padding: "8% 8vw",
                }}
                align={"center"}
            >
                
                <Box
                    component="a"
                    href="/"
                    display="inline-flex"
                    alignItems="center"
                    style={{
                        padding: "0 10vw"
                    }}
                >
                    <Image
                        src="/assets/logo.svg"
                        alt="logo"
                        width={28}
                        height={28}
                    />
                    <span
                        className={navStyles.appName}
                        style={{
                            color: "white",
                            fontSize: "22px",
                            fontWeight: "350"
                        }}
                    >mtaji</span>
                </Box>
                <Box
                    style={{
                        backgroundColor: "white",
                        borderRadius: "20px",
                        marginTop: "8%",
                        overflow: "hidden",
                        paddingBottom: "20px",
                        color: "#2518B8"
                    }}
                >
                    <Typography
                        variant="h5"
                        style={{
                            backgroundColor: "#01bbc8",
                            padding: "2% 0",
                            color: "#2518B8"
                        }}
                    >
                        Forgot Password
                    </Typography>
                    {sending?<LinearProgress color="inherit"/>:""}
                    <Typography
                        style={{
                            marginTop: "5vh",
                            color: "#2518B8",
                            fontSize: "17px"
                        }}
                    >
                        <strong style={{ fontSize: "25px" }}>Hello!,</strong><br/>
                        Please enter your account email here;<br/><br/>
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
                            variant="contained"
                            style={{
                                backgroundColor: "#2518B8",
                                marginTop: "20px"
                            }}
                            onClick={handleEmail}
                        >Send Reset</Button>
                    </Typography>
                    <Typography
                        style={{
                            marginTop: "10px",
                            color: "#2518B8",
                            fontSize: "17px",
                            paddingLeft: "8%"
                        }}
                        align="left"
                    >                     
                        <strong>NOTE:</strong><br/>
                        <small>A password reset token will be sent to the email you provide</small>
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
                            Go to <a href={`../login`}>
                            <Button variant="outlined" size="small" style={{ color: "#01bbc8", border: "1px #01bbc8 solid" }}>Login here</Button>
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
                    backgroundImage: "url('/assets/signup.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >

            </Grid>
        </Grid>
    )
}

export default VerifyEmail;
