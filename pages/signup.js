import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

import HomeLogo from "../components/HomeLogo";
import TextInput from "../components/TextInput/TextInput";
import Alert from '@mui/material/Alert';

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
    setFetchError("");
    setLoading(true);
    // try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users`,
        {
          // username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      )
      .then((result) => {
        router.push("/login");
        setLoading(false);        
      })
      .catch((error) => {
          setFetchError(error.response.data.message);
          setLoading(false);
      })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validData = verifyUserData();
    if (validData) {
      handleSignUp();
    }
  };

  return (
    <>
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
