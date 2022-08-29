import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import jwt_decode from 'jwt-decode';
import Image from "next/image";
import {
    Grid,
    Box,
    Typography
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import BlockIcon from '@mui/icons-material/Block';
import navStyles from "../../components/Header/Header.module.css";

const Account = () => {

    const router = useRouter();

    const { verificationToken } = router.query;

    const [isVerifying, setIsVerifying] = useState(false)
    const [isVerified, setIsVerified] = useState(false)
    const [userData, setUserData] = useState({})
    const [verificationMsg, setVerificationMsg] = useState("")
    const [noteMsg, setNoteMsg] = useState("")

    useEffect(() => {
        getTokenData()
    }, [isVerifying])

    const getTokenData = async () => {
        setVerificationMsg("Verifying Account...")
        setNoteMsg("Please wait as your account is being verified.")
        try {
            setUserData(jwt_decode(verificationToken))
            const response = await axios.patch(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/activate-account/${verificationToken}`, {
                    headers: {
                    'Content-Type': 'Application/json',
                    }
                }            
            )
            .then((result) => {
                setVerificationMsg(result.data.message)
                setNoteMsg("Your account has been activated, you can now login to your account.")
                setIsVerifying(true)
                setIsVerified(true)
            })
            .catch(error => {
                setVerificationMsg("Verification Unsuccessful!")
                setNoteMsg("Your verification token has expired.")
                setIsVerifying(true) 
            })
        } catch(err) {
            setVerificationMsg("Verification Unsuccessful!")
            setNoteMsg("Your verification token is invalid")
            setIsVerifying(true) 
        }
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
                    paddingTop: "8%",
                }}
                align={"center"}
            >
                
                <Box
                    component="a"
                    href="/"
                    display="inline-flex"
                    alignItems="center"
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
                        width: "50%",
                        height: "40vh",
                        borderRadius: "5%",
                        marginTop: "8%",
                        overflow: "hidden"
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
                        Account Activation
                    </Typography>
                    <Typography
                        style={{
                            marginTop: "50px",
                            color: "#2518B8",
                            fontSize: "18px"
                        }}
                    >
                        <strong style={{ fontSize: "25px" }}>Welcome back,</strong><br/>
                        Thank you again for joining Mtaji,<br/><br/>
                        {isVerified?
                            <><TaskAltIcon style={{ color: "#01bbc8", fontSize: "80px"}}/><br/></>
                        :
                            <><BlockIcon style={{ color: "red", fontSize: "80px"}}/><br/></>
                        }
                        <strong>{verificationMsg}</strong><br/>
                        {!setIsVerifying?
                            <><CircularProgress color="primary" /><br/></>
                        : "" }
                        <small>{noteMsg}</small><br/><br/>
                        <small><strong>Note:</strong> This page will automatically be redirected.</small>

                    </Typography>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={8}
                lg={6}
                xl={6}
                style={{
                    backgroundColor: "white",
                    height: "100vh",
                    backgroundImage: "url('/assets/signup.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >

            </Grid>
        </Grid>
    )
}

export default Account;
