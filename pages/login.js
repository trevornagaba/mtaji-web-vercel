import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

import cookieCutter from "cookie-cutter";

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
  Chip
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import navStyles from "../components/Header/Header.module.css";


export default function Login() {

  const { isLoaded, isAuth, errors, setErrors } = useContext(AppContext);
  
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [email, setEmail] = useState("")
  const [errEmail, setErrEmail] = useState(false)
  const [errEmailMsg, setErrEmailMsg] = useState("")
  const [password, setPassword] = useState("")
  const [errPassword, setErrPassword] = useState(false)
  const [errPasswordMsg, setErrPasswordMsg] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)
  const [actionMsg, setActionMsg] = useState("")

  const emailChange = (e) => {
    setEmail(e.target.value)
  }

  const passwordChange = (e) => {
    setPassword(e.target.value)
  }

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
      let loginResult = handleSignin()
      if(loginResult===false){
        setErrors(true);
        fetchError("Incorrect credentials")
      }
    }
    setLoading(true);
  };

  const handleLogin = async (e) => {
    setSent(false)
    setSending(true)
    setErrEmail(false)
    setErrEmailMsg("")
    setErrPassword(false)
    setErrPasswordMsg("")
    setError(false)
    setActionMsg("")
    if(email===""){
      setErrEmail(true)
      setErrEmailMsg("Missing Email field")
    }
    if (password==="") {
      setErrPassword(true)
      setErrPasswordMsg("Missing password field")
    }
    if(email!==""&&password!=="") {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
        {
          email: email,
          password: password,
        }
      )
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        setSent(true)
        setActionMsg(result.data.message)
        router.push("/home");
      })
      .catch(error => {
        setError(true)
        setActionMsg(error.response.data.message);
      })
    }
    setSending(false)
  }

  return (
    <>
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
              backgroundColor: "#ffffff",
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
                  style={{
                      color: "#000000",
                      fontSize: "16px",
                      fontFamily: "'Poppins', Courier, monospace",
                      fontWeight: "400",
                      padding: "40px 10%",
                  }}
                  align="center"
              >
                <span className="title">Welcome! Let&apos;s get you started</span><br/>
                <span className="subtitle">Fill in your details to get started</span>
              </Typography>
              {sending?<LinearProgress color="inherit" style={{ width: "80%", marginBottom: "40px" }}/>:""}
              {sent?
                  <Alert
                      severity="success"
                      style={{
                          width: "80%",
                          marginBottom: "15px"
                      }}
                  >{actionMsg}</Alert>
              : error?
                <Alert
                    severity="error"
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
                  error={errEmail}
                  helperText={errEmailMsg}
                  style={{
                      width: "80%",
                  }}
              />
              <FormControl
                style={{
                  m: 1,
                  width: '80%',
                  marginTop: "30px"
                }}
                variant="outlined"
              >
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
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
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                      </InputAdornment>
                      }
                      label="Password"
                  />
                  <FormHelperText id="outlined-weight-helper-text" style={{ color: errPassword?"red":"gray"}}>{errPasswordMsg}</FormHelperText>
              </FormControl>
              <Typography
                  style={{
                      marginTop: "10px",
                      color: "#2518B8",
                      fontSize: "18px",
                      width: "80%"
                  }}
                  align="center"
              >
                  <Button
                      // disabled={sending}
                      variant="contained"
                      style={{
                        color: "white",
                        marginLeft: "20px",
                        border: "1px #2518B8 solid",
                        backgroundColor: "#2518B8",
                        textTransform: "none",
                        boxShadow: "none",
                        padding: "5px 30px"
                      }}
                      onClick={handleLogin}
                  >Login</Button>
                  <Button
                      component="a"
                      href="/signup"
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
                  >Join Us</Button>
              </Typography>
              <Typography
                  style={{
                      marginTop: "10px",
                      color: "gray",
                      fontSize: "17px",
                      width: "80%"
                  }}
                  align="center"
              >
                  <small>
                      After a successful sign up, please visit your email for a confirmation email.
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
              backgroundImage: "url('/assets/login.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
          }}
      >

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

      `}
    </style>
      <div className="main-container">
        <div className="background-container">
          <img src="assets/signin.svg" className="svg absolute bottom-20 w-20" style={{left:"-40px"}}/>
        </div>
        <div className="content">
          <div className="top-container">
            <div className="logo-container">
              <HomeLogo />
            </div>
          </div>
          <div><br/></div>
          <div style={{width:'100%', height:'80vh', display:'flex', flexDirection:'column', alignItems:'center', padding: '0 5vw', boxSizing:'border-box', overflow: 'auto'}}>
            <p className="title">Hey There! Welcome back</p>
            <p className="subtitle">We missed you quite a bit...</p>
          <div><br/></div>
          {/* Fetch or Server errors */}
          {/* {fetchError && <Alert message={fetchError} />} */}
          <form className="login-form" onSubmit={handleSubmit}>            
            {errors!=""?<Alert severity="error">{errors}</Alert>:""}
            <div className="inputs">
              <TextInput
                type="text"
                name="email"
                label="Email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                error={errors.email}
              />
              <TextInput
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                error={errors.password}
              />
              <Link href="verify-email">
                <p className="password-reset">Forgot password?</p>
              </Link>
            <button>{loading ? "Loading..." : "Sign In"}</button>
            </div>

            <div className="sign-up-prompt">
              <p className="question">New Here?</p>

              <Link href="signup">
                <p className="link">Create an account</p>
              </Link>
            </div>
          </form>

          </div>
        </div>
        <img src="assets/signin2.svg" className="svg absolute bottom-2 w-20" style={{left:"0px"}}/>
      </div>

      <style jsx>{`
        .main-container {
          display: flex;
          flex-direction: row-reverse;
          height: 100vh;
          width:100vw;
        }

        .background-container {
          flex-basis: 50%;
          background: url("/assets/login.svg");
          background-repeat: no-repeat;
          background-size:cover;
          position: relative
        }

        .content {
          flex-basis: 50%;
          padding: 2vw;
        }

        .top-container {
          display: flex;
          margin-bottom: 60px;
        }

        .logo-container {
          display: inline-block;
          margin: 0 50px;
        }

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

        .login-form {
          padding: 16px;
          width: 100%
        }

        .login-form .inputs {
          width: 100%;
          margin: 0 auto;
        }

        .login-form .inputs .password-reset {
          text-align: right;
          margin-top: 0;
          color: #2518b8;
          cursor: pointer;
          text-decoration: underline;
        }

                .login-form .inputs p:hover {
                    color: #01bbc8;
                }

                .login-form input[type="text"] {
                    display: block;
                    border: 1px solid #b0b0b0;
                    border-radius: 10px;
                    width: 100%;
                    padding: 16px;
                    margin-bottom: 16px;
                }

                .login-form button {
                    display: block;
                    color: white;
                    cursor: pointer;
                    font-size: 1.2rem;
                    width: 100%;
                    margin: 24px auto;
                    padding: 8px;
                    background: #2518b8;
                    border: none;
                    border-radius: 5px;
                }

                .login-form button:hover {
                    background: #01bbc8;
                }

                .or-option {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 24px;
                }

                .or-option div {
                    width: 20%;
                    height: 1px;
                    background-color: #c4c4c4;
                }

                .or-option span {
                    display: inline-block;
                    padding: 0 16px;
                }

                .google-button {
                    width: 40%;
                    cursor: pointer;
                    margin: 0 auto;
                    border: 1px solid #c4c4c4;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 8px;
                }

                .google-button:hover {
                    border: 1px solid #01bbc8;
                    color: #01bbc8;
                }

                .google-button span {
                    padding-left: 16px;
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

                .sign-up-prompt .link:hover {
                    color: #01bbc8;
                }

                /* Adjust for smartphone screen sizes. */
                @media only screen and (max-width: 600px) {
                    .main-container {
                        display: block;
                    }

                    .svg {
                        display: none;
                    }
                    .background-container {
                        height: 0;
                    }

                    .login-form .inputs {
                        width: 100%;
                    }

                    .google-button,
                    .login-form button {
                        width: 100%;
                    }
                    .logo-container {
                        margin: 0 auto;
                    }
                }

                /* Adjust for tablet screen sizes. */
                @media only screen and (min-width: 600px) and (max-width: 1000px) {
                    .main-container {
                        display: block;
                    }

                    .background-container {
                        height: 0;
                    }
                    .logo-container {
                        margin: 0 auto;
                    }
                }
            `}</style>
        </>
    );
}
