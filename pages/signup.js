import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

import HomeLogo from "../components/HomeLogo";
import TextInput from "../components/TextInput/TextInput";
import Alert from "../components/Alert/Alert";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
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

    // validate username
    if (!formData.username) {
      errorsObject.username = "Username is required.";
      touchedObject.username = false;
      isValid = false;
    }

    // validate email
    const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!formData.email) {
      errorsObject.email = "Email address is required.";
      touchedObject.email = false;
      isValid = false;
    } 
    // else if (!emailRegex.test(email)) {
    //   errorsObject.email = "Invalid Email: Input correct email address format.";
    //   touchedObject.email = false;
    //   isValid = false;
    // }

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
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );
      if (response.status === 201) {
        router.push("/login");
        setLoading(false);
      } else {
        setFetchError(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      setFetchError("Oops! Something went wrong. Please try again.");
      setLoading(false);
    }
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
        <div className="background-container" />

        <div className="content">
          <div className="top-container">
            <div className="logo-container">
              <HomeLogo />
            </div>
          </div>
          <p className="title">Sign Up</p>
          {/* Fetch or Server errors */}
          {fetchError && <Alert message={fetchError} />}
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="inputs">
              <TextInput
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                value={formData.username}
                touched={touched.username}
                error={errors.username}
              />
              <TextInput
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                touched={touched.email}
                error={errors.email}
              />
              <TextInput
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                touched={touched.password}
                error={errors.password}
              />
              <TextInput
                type="password"
                name="passwordConfirmation"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={formData.passwordConfirmation}
                touched={touched.passwordConfirmation}
                error={errors.passwordConfirmation}
              />
              <button>{loading ? "Loading..." : "Sign Up"}</button>
              <div className="sign-in-prompt">
                <p className="question">Already have an account?</p>

                <Link href="/login">
                  <p className="link">Login</p>
                </Link>
              </div>
              <div className="or-option">
                <div></div>
                <span>or</span>
                <div></div>
              </div>
              <Link href="/home">
                <div className="google-button">
                  <img src="/assets/google_icon.svg" alt="google_icon" />
                  <span>Sign in with Google</span>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .main-container {
          display: flex;
          flex-direction: row-reverse;
        }

        .background-container {
          flex-basis: 50%;
          background: url("/assets/signup_background.svg");
          background-repeat: no-repeat;
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

        .signup-form {
          padding: 16px;
        }

        .signup-form .inputs {
          width: 80%;
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

          .background-container {
            height: 50vh;
            background-position: top;
            background-size: contain;
          }

          .signup-form .inputs {
            width: 100%;
          }

          .google-button,
          .signup-form button {
            width: 100%;
          }
        }

        /* Adjust for tablet screen sizes. */
        @media only screen and (min-width: 600px) and (max-width: 800px) {
          .main-container {
            display: block;
          }

          .background-container {
            height: 50vh;
            background-position: top;
            background-size: contain;
          }
        }
      `}</style>
    </>
  );
}
