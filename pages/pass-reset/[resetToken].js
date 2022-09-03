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
    Alert,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    FormHelperText,
    IconButton,
    Chip
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import navStyles from "../../components/Header/Header.module.css";

import passwordStrength from "../../utils/passwordStrength"

const PassReset = () => {

    const router = useRouter();

    const { resetToken } = router.query;

    const [sent, setSent] = useState(false)
    const [sending, setSending] = useState(false)
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [passStrength, setPassStrength] = useState({
        strength: "default",
        display: "Password field empty"
    })
    const [cPassword, setCPassword] = useState("")
    const [showCPassword, setShowCPassword] = useState(false)
    const [error, setError] = useState(false)
    const [actionMsg, setActionMsg] = useState("")

    const passwordChange = (e) => {
        setPassword(e.target.value)
        setPassStrength(passwordStrength(e.target.value))
    }

    const cPasswordChange = (e) => {
        setCPassword(e.target.value)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickShowCPassword = () => {
        setShowCPassword(!showCPassword);
    };


    const handlePassword = async () => {
        setSent(false)
        setSending(true)
        setError(false)
        setActionMsg("")
        if(password===cPassword) {
            setError(false)
            setActionMsg("")
            const response = await axios.patch(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/pass-reset/${resetToken}`, {
                    headers: {
                    'Content-Type': 'Application/json'
                    },
                    password: password
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
        } else {
            setError(true)
            setActionMsg("Passwords do not match!")
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
                        Reset Password
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
                        Please create a new password, the new password will replace your old password.
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
                    <FormControl style={{ m: 1, width: '80%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={passwordChange}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                        <Box
                            style={{
                                fontSize: "15px",
                                padding: "10px 0",
                                textAlign: "left"
                            }}
                        >
                            <strong style={{ color: "gray" }}>Strength: </strong>
                            <Chip
                                label={passStrength.display}
                                color={passStrength.strength}
                                size="small"
                            />                            
                        </Box>
                    </FormControl>
                    <FormControl
                        variant="outlined"
                        sx={{
                            m: 1,
                            width: '80%',
                        }}
                    >
                        <InputLabel
                            htmlFor="outlined-adornment-password"
                            style={{
                                color: error?"red":"gray"
                            }}
                        >
                            Confirm Password
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showCPassword ? 'text' : 'password'}
                            value={cPassword}
                            onChange={cPasswordChange}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowCPassword}
                                edge="end"
                                >
                                {showCPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Confirm Password"                           
                            error={error}
                        />
                        <FormHelperText id="outlined-weight-helper-text" style={{ color: "red" }}>{actionMsg}</FormHelperText>
                    </FormControl>
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
                            onClick={handlePassword}
                        >Reset</Button>
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
                        <small>
                            This page will become obsolete after <strong>24 hours</strong>.
                        </small>
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
                    backgroundImage: "url('/assets/password-reset.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >

            </Grid>
        </Grid>
    )
}

export default PassReset;
