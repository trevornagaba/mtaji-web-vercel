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

    const [isVerifying, setIsVerifying] = useState(true)
    const [isVerified, setIsVerified] = useState(false)
    const [veriToken, setVeriToken] = useState(false)
    const [userData, setUserData] = useState({})
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
                        {isVerifying?
                            <><CircularProgress color="inherit" /><br/></>
                        :
                            isVerified?<><TaskAltIcon style={{ color: "#01bbc8", fontSize: "60px"}}/><br/></>
                            : <><BlockIcon style={{ color: "grey", fontSize: "60px"}}/><br/></>
                        }                      
                        <strong>{verificationMsg}</strong><br/>
                        <small>{noteMsg}</small><br/><br/>
                        <small>Go to <a href={`../login`}><strong>Login here</strong></a></small>

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
                    backgroundImage: "url('/assets/signup.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >

            </Grid>
        </Grid>
    )
}

export default Account;
