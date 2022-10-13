import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

// NEW IMPORTS
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
    Chip,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import navStyles from "../components/Header/Header.module.css";

import emailChecker from "../utils/emailChecker";
import passwordStrength from "../utils/passwordStrength";
import Logo from "../components/Logo/Logo";

const SignUp = () => {
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [email, setEmail] = useState("");
    const [emailState, setEmailState] = useState({
        emailStatus: "default",
        emailMsg: "Add an Email",
    });
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [passStrength, setPassStrength] = useState({
        strength: "default",
        display: "Password field empty",
    });
    const [cPassword, setCPassword] = useState("");
    const [showCPassword, setShowCPassword] = useState(false);
    const [error, setError] = useState(false);
    const [actionMsg, setActionMsg] = useState("");

    const emailChange = (e) => {
        setEmail(e.target.value);
        setEmailState(emailChecker(e.target.value));
    };

    const passwordChange = (e) => {
        setPassword(e.target.value);
        setPassStrength(passwordStrength(e.target.value));
    };

    const cPasswordChange = (e) => {
        setCPassword(e.target.value);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickShowCPassword = () => {
        setShowCPassword(!showCPassword);
    };

    const handleSignUp = async (e) => {
        setSent(false);
        setSending(true);
        setError(false);
        setActionMsg("");
        if (emailState.emailStatus != "error") {
            if (password === cPassword) {
                if (passStrength.strength != "error") {
                    setError(false);
                    setActionMsg("");
                    const response = await axios
                        .post(
                            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users`,
                            {
                                email: email,
                                password: password,
                            }
                        )
                        .then((result) => {
                            setSent(true);
                            setActionMsg(result.data.message);
                        })
                        .catch((error) => {
                            setError(true);
                            setActionMsg(error.response.data.message);
                        });
                }
            } else {
                setError(true);
                setActionMsg("Passwords do not match!");
                if (cPassword === "") {
                    setActionMsg("Please confirm your password");
                }
                if (password === "") {
                    setActionMsg("Please add a new password");
                }
            }
        }
        setSending(false);
    };
    const googleSignUp = () => {
        window.open(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/google/callback`,
            "_self"
        );
    };
    return (
        <>
            <Head>
                <title>Join Mtaji</title>
                <meta
                    name="description"
                    content="Sign up for Equity Crowdfunding for Africans"
                />
            </Head>
            <Grid
                container
                style={{
                    overflow: "hidden",
                    height: "100vh",
                }}
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
                        backgroundColor: "#ffffff",
                        padding: "0 5vw",
                        paddingBottom: "5%",
                        marginTop: "30px",
                        maxHeight: "95vh",
                        overflow: "hidden",
                        position: "relative",
                    }}
                    align={"center"}
                >
                    <div
                        className="formContent"
                        style={{ height: "100%", overflow: "auto", zIndex: 2 }}
                    >
                        <span
                            style={{
                                width: "100%",
                            }}
                            className="logoContainer"
                        >
                            <Link href="/">
                                <Logo />
                            </Link>
                            {/* <span
                    className={navStyles.appName}
                    style={{
                        color: "#2518B8",
                        fontSize: "22px",
                        fontWeight: "550"
                    }}
                >mtaji</span> */}
                        </span>
                        <Box
                            style={{
                                width: "95%",
                                backgroundColor: "white",
                                borderRadius: "20px",
                                // marginTop: "10%",
                                overflow: "hidden",
                                paddingBottom: "20px",
                                color: "#01BBC8",
                            }}
                        >
                            <Typography
                                style={{
                                    color: "#000000",
                                    fontSize: "16px",
                                    fontFamily: "'Poppins', Courier, monospace",
                                    fontWeight: "400",
                                    padding: "30px 10%",
                                }}
                                align="center"
                            >
                                <span className="title">
                                    Welcome! Let&apos;s get you started
                                </span>
                                <br />
                                <span className="subtitle">
                                    Fill in your details to get started
                                </span>
                            </Typography>
                            {sending ? (
                                <LinearProgress
                                    color="inherit"
                                    style={{
                                        width: "80%",
                                        marginBottom: "40px",
                                    }}
                                />
                            ) : (
                                ""
                            )}
                            {sent ? (
                                <Alert
                                    severity="success"
                                    style={{
                                        width: "80%",
                                        marginBottom: "15px",
                                    }}
                                >
                                    {actionMsg}
                                </Alert>
                            ) : error ? (
                                <Alert
                                    severity="error"
                                    style={{
                                        width: "95%",
                                        marginBottom: "15px",
                                    }}
                                >
                                    {actionMsg}
                                </Alert>
                            ) : (
                                ""
                            )}
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                placeholder="example@gmail.com"
                                type="email"
                                value={email}
                                onChange={emailChange}
                                error={emailState.emailStatus === "error"}
                                style={{
                                    width: "95%",
                                }}
                            />
                            <Box
                                style={{
                                    width: "95%",
                                    fontSize: "15px",
                                    padding: "10px 0",
                                    textAlign: "left",
                                }}
                            >
                                <Chip
                                    label={emailState.emailMsg}
                                    color={emailState.emailStatus}
                                    size="small"
                                />
                            </Box>
                            <FormControl
                                style={{
                                    m: 1,
                                    width: "95%",
                                    marginTop: "20px",
                                }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={passwordChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                                <Box
                                    style={{
                                        fontSize: "15px",
                                        padding: "10px 0",
                                        textAlign: "left",
                                    }}
                                >
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
                                    marginTop: "25px",
                                    width: "95%",
                                }}
                            >
                                <InputLabel
                                    htmlFor="outlined-adornment-password"
                                    style={{
                                        color:
                                            password === cPassword
                                                ? "gray"
                                                : cPassword === ""
                                                ? "gray"
                                                : "red",
                                    }}
                                >
                                    Confirm Password
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showCPassword ? "text" : "password"}
                                    value={cPassword}
                                    onChange={cPasswordChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowCPassword
                                                }
                                                edge="end"
                                            >
                                                {showCPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Confirm Password"
                                    error={
                                        password !== cPassword &&
                                        cPassword !== ""
                                    }
                                />
                            </FormControl>
                            <Typography
                                style={{
                                    marginTop: "25px",
                                    color: "#2518B8",
                                    fontSize: "18px",
                                    width: "95%",
                                }}
                                align="center"
                            >
                                <Button
                                    // disabled={sending}
                                    variant="contained"
                                    style={{
                                        color: "white",
                                        // marginLeft: "20px",
                                        border: "1px #2518B8 solid",
                                        backgroundColor: "#2518B8",
                                        textTransform: "none",
                                        boxShadow: "none",
                                        padding: "8px 30px",
                                        width: "100%",
                                        fontFamily: "Poppins",
                                        fontSize: "16px",
                                    }}
                                    onClick={handleSignUp}
                                >
                                    Sign up
                                </Button>
                                <Button
                                    // disabled={sending}
                                    variant="contained"
                                    style={{
                                        color: "#2518B8",
                                        // marginLeft: "20px",
                                        border: "1px #2518B8 solid",
                                        textTransform: "none",
                                        boxShadow: "none",
                                        padding: "8px 30px",
                                        width: "100%",
                                        fontFamily: "Poppins",
                                        fontSize: "16px",
                                        flexDirection: 'row',
                                        marginTop: "16px",
                                        gap:8
                                    }}
                                    onClick={googleSignUp}
                                >
                                    <Image
                                        src="/assets/google.svg"
                                        height={25}
                                        width={25}
                                    />{" "}
                                    Sign up with google
                                </Button>
                                {/* <Button
                        component="a"
                        href="/login"
                        variant="contained"
                        style={{
                            color: "#2518B8",
                            marginLeft: "20px",
                            border: "1px #2518B8 solid",
                            backgroundColor: "white",
                            textTransform: "none",
                            boxShadow: "none",
                            padding: "5px 30px"
                        }}
                    >Login</Button> */}
                            </Typography>
                            {/* <Typography
                    style={{
                        marginTop: "10px",
                        color: "gray",
                        fontSize: "17px",
                        width: "80%"
                    }}
                    align="center"
                >
                    <small>
                        Already have an account <a href="/login" style={{
                          color: ""
                        }}>Login</a>
                    </small>
                </Typography> */}
                            <div className="sign-in-prompt">
                                <p className="question">
                                    Already have an account?
                                </p>

                                <Link href="/login">
                                    <p className="link">Login</p>
                                </Link>
                            </div>
                        </Box>
                    </div>
                    <img
                        src="/assets/signin2.svg"
                        style={{
                            height: "80px",
                            position: "absolute",
                            bottom: 0,
                            left: -10,
                            zIndex: 0,
                        }}
                    />
                </Grid>
                <Grid
                    item
                    sx={{
                        display: {
                            xs: "none",
                            sm: "none",
                            md: "flex",
                            lg: "flex",
                        },
                    }}
                    xs={12}
                    sm={12}
                    md={4}
                    lg={6}
                    xl={6}
                    style={{
                        backgroundColor: "white",
                        height: "100vh",
                        backgroundImage: "url('/assets/signup.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        position: "relative",
                    }}
                >
                    <img
                        src="/assets/signin.svg"
                        style={{
                            height: "80px",
                            position: "absolute",
                            bottom: 50,
                            left: -40,
                        }}
                    />
                </Grid>
            </Grid>
            <style jsx>
                {`
                    .title {
                        text-align: center;
                        margin-bottom: 0;
                        color: #09062d;
                        font-size: 32px;
                        font-weight: bold;
                    }

                    .subtitle {
                        text-align: center;
                        color: #8c8c8c;
                    }
                    .sign-in-prompt {
                        display: flex;
                        justify-content: center;
                        margin-bottom: 16px;
                        align-items: center;
                        margin-top: 10px;
                    }
                    .sign-in-prompt .link {
                        padding-left: 8px;
                        cursor: pointer;
                        color: #2518b8;
                    }
                    .sign-in-prompt .link:hover {
                        color: #01bbc8;
                    }
                    .question {
                        color: #09062d;
                    }
                    @media only screen and (max-width: 600px) {
                        .logoContainer {
                            display: flex;
                            justify-content: center;
                        }
                    }
                    .formContent::-webkit-scrollbar {
                        width: 4px;
                    }

                    .formContent::-webkit-scrollbar-track {
                        background-color: #ffffff;
                        border-radius: 100px;
                    }

                    .formContent::-webkit-scrollbar-thumb {
                        background-color: #ffffff;
                        border-radius: 100px;
                    }
                `}
            </style>
        </>
    );
};

export default SignUp;
