import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import jwt_decode from 'jwt-decode';
import Image from "next/image";
import {
    Grid,
    Box,
    Typography,
    LinearProgress,
    Button
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import BlockIcon from '@mui/icons-material/Block';
import navStyles from "../../components/Header/Header.module.css";

const Account = () => {

    const router = useRouter();

    const { verificationToken } = router.query;

    const [isVerifying, setIsVerifying] = useState(true)
    const [isVerified, setIsVerified] = useState(false)
    const [veriToken, setVeriToken] = useState(false)
    const [verificationMsg, setVerificationMsg] = useState("Verifying Account...")
    const [noteMsg, setNoteMsg] = useState("Please wait as your account is being verified.")

    useEffect(() => {
        getTokenData()
    })

    const getTokenData = async () => {
        setVeriToken(verificationToken)

        const response = await axios.patch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/activate-account/${veriToken}`, {
                headers: {
                'Content-Type': 'Application/json'
                },
                isActive: true
            }
        )
        .then((result) => {
            setIsVerified(true)
            setIsVerifying(false)
            setVerificationMsg(result.data.message)
            setNoteMsg("Your account has been activated, you can now login to your account.")
        })
        .catch(error => {
            setIsVerifying(false)
            setVerificationMsg("Verification Unsuccessful!")
            setNoteMsg("Your verification token has expired.")
        });
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
                        Account Activation
                    </Typography>
                    {isVerifying?<LinearProgress color="inherit"/>:""}
                    <Typography
                        style={{
                            color: "#2518B8",
                            fontSize: "16px",
                            fontFamily: "'Poppins', Courier, monospace",
                            fontWeight: "400",
                            padding: "40px 10%",
                        }}
                    >
                        <strong style={{ fontSize: "25px" }}>Welcome back,</strong><br/>
                        Thank you again for joining Mtaji,<br/><br/>
                        {isVerified?<><TaskAltIcon style={{ color: "#01bbc8", fontSize: "60px"}}/><br/></>
                        : <><BlockIcon style={{ color: "grey", fontSize: "60px"}}/><br/></>
                        }                      
                        <strong>{verificationMsg}</strong><br/>
                        <small>{noteMsg}</small>
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
                    backgroundImage: "url('/assets/account-activation.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >

            </Grid>
        </Grid>
    )
}

export default Account;
