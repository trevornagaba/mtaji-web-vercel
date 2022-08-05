import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

import cookieCutter from "cookie-cutter";

import { AppContext } from "../components/AppContext"

import HomeLogo from "../components/HomeLogo";
import TextInput from "../components/TextInput/TextInput";
import Alert from "../components/Alert/Alert";

export default function Login() {

  const { isLoaded, isAuth, handleLogin } = useContext(AppContext);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
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
    handleLogin(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validData = verifyUserSigninData();
    if (validData) {
      handleSignin();
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="background-container" />

        <div className="content">
          <div className="top-container">
            <div className="logo-container">
              <HomeLogo />
            </div>
          </div>
          <div><br/></div>
          <p className="title">Welcome back</p>
          <p className="subtitle">Please sign in to your account</p>
          <div><br/></div>
          {/* Fetch or Server errors */}
          {fetchError && <Alert message={fetchError} />}
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="inputs">
              <TextInput
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                error={errors.email}
              />
              <TextInput
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                error={errors.password}
              />
              <p className="password-reset">Forgot password?</p>
            </div>
            <button>{loading ? "Loading..." : "Sign In"}</button>

            <div className="or-option">
              <div></div>
              <span>or</span>
              <div></div>
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
        }

        .content {
          flex-basis: 50%;
          padding: 2vw;
        }

        .top-container {
          display: flex;
        }

        .logo-container {
          display: inline-block;
          margin: 0 auto;
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
        }

        .login-form .inputs {
          width: 80%;
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
          width: 40%;
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

          .background-container {
            height: 40vh;
            max-width: 100vw
            flex-basis:none;
            background: url("/assets/login_background.svg");
            background-position: center;
            background-size: cover;
          }

          .login-form .inputs {
            width: 100%;
          }

          .google-button,
          .login-form button {
            width: 100%;
          }
        }

        /* Adjust for tablet screen sizes. */
        @media only screen and (min-width: 600px) and (max-width: 800px) {
          .main-container {
            display: block;
          }

          .background-container {
            height: 40vh;
            background: url("/assets/login_background.svg");
            background-position: center;
            background-size: cover;
          }
        }
      `}</style>
    </>
  );
}
