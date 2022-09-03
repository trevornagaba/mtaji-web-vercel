import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

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

import emailChecker from "../utils/emailChecker"
import passwordStrength from "../utils/passwordStrength"

export default function SignUp() {
  const [formData, setFormData] = useState({
    // username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [fetchError, setFetchError] = useState("");
  const [touched, setTouched] = useState({});
  const router = useRouter();

  // ------------------------- NEW HOOKS
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [email, setEmail] = useState("")
  const [emailState, setEmailState] = useState(emailChecker(""))
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

  const emailChange = (e) => {
    setEmail(e.target.value)
    setEmailState(emailChecker(e.target.value))
  }

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
  // ------------------------- END OF NEW HOOKS 

  const verifyUserData = () => {
    let errorsObject = {};
    let touchedObject = {};
    let isValid = true;

    // validate email
    const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!formData.email) {
      errorsObject.email = "Email address is required.";
      touchedObject.email = false;
      isValid = false;
    }

    // validate password
    if (!formData.password) {
      errorsObject.password = "Password is required.";
      touchedObject.password = false;
      isValid = false;
    } else if (formData.password.length < 6) {
      errorsObject.password = "Password must be at least 6 characters.";
      touchedObject.password = false;
      isValid = false;
    }

    // validate password confirmation
    if (
      formData.password !== formData.passwordConfirmation ||
      !formData.passwordConfirmation
    ) {
      errorsObject.passwordConfirmation = "Passwords do not match.";
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

  const handleSignUp = async (e) => {
    setSent(false)
    setSending(true)
    setError(false)
    setActionMsg("")
    
    if(password===cPassword) {
      setError(false)
      setActionMsg("")
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users`,
        {
          email: email,
          password: password,
        }
      )
      .then((result) => {
        // router.push("/login");
        setSent(true)
        setActionMsg(result.data.message)
      })
      .catch(error => {
        setActionMsg(error.data.message);
      })
    } else {
      setError(true)
      setActionMsg("Passwords do not match!")
    }
    setSending(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validData = verifyUserData();
    if (validData) {
      handleSignUp();
    }
  };

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
                      align="left"
                  >
                    <p className="title">Welcome! Let&apos;s get you started</p>
                    <p className="subtitle">Fill in your details to get started</p>
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
                  :""}
                  <TextField
                      required
                      id="outlined-required"
                      label="Email"
                      placeholder="example@gmail.com"
                      type="email"
                      value={email}
                      onChange={emailChange}
                      error={emailState.emailStatus==="error"}
                      style={{
                          width: "80%",
                      }}
                  />
                  <Box
                    style={{
                        width: "80%",
                        fontSize: "15px",
                        padding: "10px 0",
                        textAlign: "left"
                    }}
                  >
                    <strong style={{ color: "gray" }}>Email Status: </strong>
                    <Chip
                        label={emailState.emailMsg}
                        color={emailState.emailStatus}
                        size="small"
                    />                            
                  </Box>
                  <FormControl
                    style={{
                      m: 1,
                      width: '80%',
                      marginTop: "20px"
                    }}
                    variant="outlined"
                  >
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
                          marginTop: "25px",
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
                          width: "80%"
                      }}
                      align="center"
                  >
                      <Button
                          // disabled={sending}
                          variant="contained"
                          style={{
                              backgroundColor: "#2518B8",
                              marginTop: "20px",
                              width: "100%"
                          }}
                          onClick={handleSignUp}
                      >Sign up</Button>
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
          <div className="formContent">
            <p className="title">Welcome! Let&apos;s get you started</p>
            <p className="subtitle">Fill in your details to get started</p>
            {/* Fetch or Server errors */}
            <form className="signup-form" onSubmit={handleSubmit}>
              {fetchError && <Alert severity="error">{fetchError}</Alert>}
              <div className="inputs">
                <TextInput
                  type="text"
                  name="email"
                  label="Email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                  touched={touched.email}
                  error={errors.email}
                />
                <TextInput
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={formData.password}
                  touched={touched.password}
                  error={errors.password}
                />
                <TextInput
                  type="password"
                  name="passwordConfirmation"
                  label="Confirm password"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={formData.passwordConfirmation}
                  touched={touched.passwordConfirmation}
                  error={errors.passwordConfirmation}
                />
                <button>{loading ? "Loading..." : "Sign Up"}</button>
                <div><br/></div>
                <div className="sign-in-prompt">
                  <p className="question">Already have an account?</p>

                  <Link href="/login">
                    <p className="link">Login</p>
                  </Link>
                </div>
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
          height:100vh;
          width: 100vw;
        }

        .background-container {
          flex-basis: 50%;
          background: url("/assets/signup.svg");
          background-repeat: no-repeat;
          background-size:cover;
          position: relative;
        }

        .content {
          flex-basis: 50%;
          padding: 2vw;
        }

        .formContent{
          width:100%;
          height:80vh;
          display:flex;
          flex-direction:column;
          align-items:center;
          padding: 0 5vw;
          box-sizing: border-box;
          overflow: auto
        }
        .formContent::-webkit-scrollbar {
          width: 4px;
      }
       
      .formContent::-webkit-scrollbar-track {
          background-color: #e4e4e4;
          border-radius: 100px;
      }
       
      .formContent::-webkit-scrollbar-thumb {
          background-color: #1c2854;
          border-radius: 100px;
      }
        .top-container {
          display: flex;
          height: 10vh
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

        .signup-form {
          padding: 16px;
          width:100%
        }

        .signup-form .inputs {
          width: 100%;
          margin: 0 auto;
        }

        .signup-form .inputs p:hover {
          color: #01bbc8;
        }

        .signup-form input[type="text"] {
          display: block;
          border: 1px solid #b0b0b0;
          border-radius: 10px;
          width: 100%;
          padding: 16px;
          margin-bottom: 16px;
        }

        .signup-form button {
          display: block;
          color: white;
          cursor: pointer;
          font-size: 1.2rem;
          width: 100%;
          margin: 24px auto 0;
          padding: 8px;
          background: #2518b8;
          border: none;
          border-radius: 5px;
        }

        .signup-form button:hover {
          background: #01bbc8;
        }

        .sign-in-prompt {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
          align-items: center;
        }

        .sign-in-prompt .link {
          padding-left: 8px;
          cursor: pointer;
          color: #2518b8;
        }

        .sign-in-prompt .link:hover {
          color: #01bbc8;
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
          width: 100%;
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

        /* Adjust for smartphone screen sizes. */
        @media only screen and (max-width: 600px) {
          .main-container {
            display: block;
          }
          .svg{
            display: none;
          }

          .background-container {
            height: 0
          }

          .signup-form .inputs {
            width: 100%;
          }

          .google-button,
          .signup-form button {
            width: 100%;
          }
          .logo-container{
            margin: 0 auto
          }
        }

        /* Adjust for tablet screen sizes. */
        @media only screen and (min-width: 600px) and (max-width: 1000px) {
          .main-container {
            display: block;
          }

          .background-container {
            height: 0
          }
          .logo-container{
            margin: 0 auto
          }
        }
      `}</style>
    </>
  );
}
