import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

import { AppContext } from "../components/AppContext";

import HomeLogo from "../components/HomeLogo";
import TextInput from "../components/TextInput/TextInput";

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
import Logo from "../components/Logo/Logo";

export default function Login() {
    const { isLoaded, isAuth, errors, setErrors, checkAuth } =
        useContext(AppContext);

    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [email, setEmail] = useState("");
    const [errEmail, setErrEmail] = useState(false);
    const [errEmailMsg, setErrEmailMsg] = useState("");
    const [password, setPassword] = useState("");
    const [errPassword, setErrPassword] = useState(false);
    const [errPasswordMsg, setErrPasswordMsg] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [actionMsg, setActionMsg] = useState("");

    useEffect(() => {
        checkAuth();
    }, []);

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState("");
    const [touched, setTouched] = useState("");
    const router = useRouter();

    const verifyUserSigninData = () => {
        let errorsObject = {};
        let touchedObject = {};
        let isValid = true;

        // validate email
        if (!formData.email) {
            errorsObject.email = "Email is required.";
            touchedObject.email = false;
            isValid = false;
        }

        // validate not admin
        if (formData.email == "admin") {
            errorsObject.email = "Email is not permitted.";
            touchedObject.email = false;
            isValid = false;
        }

        // validate password
        if (!formData.password) {
            errorsObject.password = "Password is required.";
            touchedObject.password = false;
            isValid = false;
        }

        setTouched(touchedObject);
        setErrors(errorsObject);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
        setTouched({ ...touched, [name]: true });
    };

    const handleSignin = async (e) => {
        setFetchError("");
        setLoading(true);
        // if(handleLogin(formData)) {

        // }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let validData = verifyUserSigninData();
        if (validData) {
            let loginResult = handleSignin();
            if (loginResult === false) {
                setErrors(true);
                fetchError("Incorrect credentials");
            }
        }
        setLoading(true);
    };

    const handleLogin = async (e) => {
        setSent(false);
        setSending(true);
        setErrEmail(false);
        setErrEmailMsg("");
        setErrPassword(false);
        setErrPasswordMsg("");
        setError(false);
        setActionMsg("");
        if (email === "") {
            setErrEmail(true);
            setErrEmailMsg("Missing Email field");
        }
        if (password === "") {
            setErrPassword(true);
            setErrPasswordMsg("Missing password field");
        }
        if (email !== "" && password !== "") {
            const response = await axios
                .post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "Application/json",
                    },
                    email: email,
                    password: password,
                })
                .then((result) => {
                    localStorage.setItem("token", result.data.token);
                    checkAuth();
                    setSent(true);
                    setActionMsg(result.data.message);
                    router.push("/home");
                })
                .catch((error) => {
                    setError(true);
                    // console.log(error);
                    setActionMsg(error.response.data.message);
                });
        }
        setSending(false);
    };

    return (
        <>
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
                    <span
                        style={{
                            width: "100%",
                        }}
                        className="logoContainer"
                    >
                        <Link href="/">
                            <Logo />
                        </Link>
                    </span>
                    <Box
                        style={{
                            width: "95%",
                            backgroundColor: "white",
                            borderRadius: "20px",
                            marginTop: "10%",
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
                                padding: "40px 5%",
                            }}
                            align="center"
                        >
                            <span className="title">
                                Hey There! Welcome back
                            </span>
                            <br />
                            <span className="subtitle">
                                We missed you quite a bit...
                            </span>
                        </Typography>
                        {sending ? (
                            <LinearProgress
                                color="inherit"
                                style={{ width: "80%", marginBottom: "40px" }}
                            />
                        ) : (
                            ""
                        )}
                        {sent ? (
                            <Alert
                                severity="success"
                                style={{
                                    width: "95%",
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
                            error={errEmail}
                            helperText={errEmailMsg}
                            style={{
                                width: "95%",
                            }}
                        />
                        <FormControl
                            style={{
                                m: 1,
                                width: "95%",
                                marginTop: "30px",
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
                                error={errPassword}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
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

                            <Link
                                href="/verify-email"
                                className="password-reset"
                            >
                                Forgot password?
                            </Link>

                            <FormHelperText
                                id="outlined-weight-helper-text"
                                style={{ color: errPassword ? "red" : "gray" }}
                            >
                                {errPasswordMsg}
                            </FormHelperText>
                        </FormControl>
                        <Typography
                            style={{
                                marginTop: "10px",
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
                                    border: "1px #2518B8 solid",
                                    backgroundColor: "#2518B8",
                                    textTransform: "none",
                                    boxShadow: "none",
                                    padding: "8px 0px",
                                    width: "100%",
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                }}
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                        </Typography>
                        <Typography
                            style={{
                                marginTop: "10px",
                                color: "gray",
                                fontSize: "17px",
                                width: "80%",
                            }}
                            align="center"
                        >
                            <div className="sign-up-prompt">
                                <p className="question">New Here?</p>

                                <Link href="/signup">
                                    <p className="link">Create an account</p>
                                </Link>
                            </div>
                        </Typography>
                    </Box>
                    <img
                        src="/assets/signin2.svg"
                        style={{
                            height: "80px",
                            position: "absolute",
                            bottom: 0,
                            left: -10,
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
                        backgroundImage: "url('/assets/login.svg')",
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
                    .password-reset {
                        text-align: right;
                        margin-top: 10px;
                        color: #2518b8;
                        cursor: pointer;
                        text-decoration: underline;
                    }
                    .sign-up-prompt {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .sign-up-prompt .link {
                        padding-left: 8px;
                        cursor: pointer;
                        color: #2518b8;
                    }
                    .sign-up-prompt .link:hover,
                    .password-reset:hover {
                        color: #01bbc8;
                    }
                    @media only screen and (max-width: 600px) {
                        .logoContainer {
                            display: flex;
                            justify-content: center;
                        }
                    }
                `}
            </style>
        </>
    );
}
