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
        display: "Type Password"
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
                        Password Reset
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
                        Add an new password for your account<br/><br/>
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
                    <FormControl sx={{ m: 1, width: '80%' }} variant="outlined">
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
                        <Typography
                            style={{
                                fontSize: "15px",
                                paddingTop: "10px"
                            }}
                            align="left"
                        >
                            <strong style={{ color: "gray" }}>Strength: </strong>
                            <Chip
                                label={passStrength.display}
                                color={passStrength.strength}
                                size="small"
                            />                            
                        </Typography>
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
                    {/* <TextField
                        required
                        id="outlined-required"
                        label="New Password"
                        placeholder="************"
                        type="password"
                        value={password}
                        onChange={passwordChange}
                        style={{
                            width: "80%",
                        }}
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
                    />
                        
                    <TextField
                        required
                        id="outlined-required"
                        label="Confirm Password"
                        placeholder="************"
                        type="password"
                        value={cPassword}
                        onChange={cPasswordChange}
                        error={error}
                        helperText={actionMsg}
                        style={{
                            width: "80%",
                            marginTop: "40px"
                        }}
                    /> */}

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
                        >Reset Password</Button>
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
                            This page will become invalid within after <strong>24 hours</strong>.
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

export default PassReset;
