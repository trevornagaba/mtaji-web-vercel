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
              backgroundImage: "url('/assets/signin.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
          }}
      >

      </Grid>
    </Grid>
  );
}
