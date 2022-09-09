import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const router = useRouter();
    const [isLoaded, setIsLoaded] = useState(false);
    const [token, setToken] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [userPortfolioDetails, setUserPortfolioDetails] = useState({});
    const [companies, setCompanies] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [transRecords, setTransRecords] = useState([]);
    const [kycForm, setKycForm] = useState({
        front: "",
        back: "",
    });
    const [alerts, setAlerts] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        
        checkAuth();
        getCompanies();
    }, []);

    const checkAuth = async () => {
        setErrors("");
        setIsLoaded(false);
        
        try {
            if (jwt_decode(localStorage.getItem("token"))) {
                let userId = jwt_decode(localStorage.getItem("token")).userId;
                const response = await axios
                    .get(
                        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/${userId}`,
                        {
                            method: "POST",
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem(
                                    "token"
                                )}`,
                                "Content-Type": "Application/json",
                            },
                        }
                    )
                    .then((result) => {
                        setIsAuth(true);
                        setUserDetails(result.data);
                        getUserPortfolioDetails(userId);
                        
                        getBlogs();
                        getFAQs();
                    })
                    .catch((error) => {
                        const pid = router?.query?.pid;
                        
                        if (
                            router.pathname === "/account" ||
                            router.pathname === "/home"
                        ) {
                            router.push("/login");
                        } else if (router.pathname === `/company/${pid}`) {
                            router.push("/signup");
                        }
                    });
            }
        } catch (err) {
            
            const pid = router?.query?.pid;
            
            if (
                router.pathname === "/account" ||
                router.pathname === "/home" ||
                router.pathname === "/company"
            ) {
                router.push("/login");
            } else if (router.pathname === `/company/[pid]`) {
                router.push("/signup");
            }
        }
        setIsLoaded(true);
    };

    // const handleSignUp = async (e) => {
    //   setSent(false)
    //   setSending(true)
    //   setError(false)
    //   setActionMsg("")

    //   if(password===cPassword) {
    //     setError(false)
    //     setActionMsg("")
    //     const response = await axios.post(
    //       `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users`,
    //       {
    //         email: email,
    //         password: password,
    //       }
    //     )
    //     .then((result) => {
    //       // router.push("/login");
    //       setSent(true)
    //       setActionMsg(result.data.message)
    //     })
    //     .catch(error => {
    //       setActionMsg(error.data.message);
    //     })
    //   } else {
    //     setError(true)
    //     setActionMsg("Passwords do not match!")
    //   }
    //   setSending(false)
    // }

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   let validData = verifyUserData();
    //   if (validData) {
    //     handleSignUp();
    //   }
    // };

    const handleLogin = async (userData) => {
        setErrors("");
        const response = await axios
            .post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                email: userData.email,
                password: userData.password,
            })
            .then((result) => {
                if (result.data) {
                    localStorage.setItem("token", result.data.token);
                    setIsAuth(true);
                    setIsLoaded(true);
                    router.push("/home");
                } else {
                    return result;
                }
            })
            .catch((error) => {
                setErrors(error.response.data.message);
            });
    };

    const VerifyEmail = async (userData) => {
        const response = await axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/verify-email`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "Application/json",
                    },
                    email: userData.email,
                }
            )
            .then(() => {
                return true;
            })
            .catch(() => {
                return false;
            });
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuth(false);
        router.push("/login");
    };

    const getCompany = async (companyId) => {
        return companies.find((company) => company.id === companyId);
    };

    const getCompanies = async () => {
        const response = await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/companies`)
            .then((result) => {
                setCompanies(result.data);
                // setIsLoaded(false);
            })
            .catch((error) => {
                setErrors(error);
                // console.log(error);
                // setIsLoaded(false);
            });
    };

    const getUserPortfolioDetails = async () => {
        // setIsLoaded(false)
        if (jwt_decode(localStorage.getItem("token"))) {
            let userId = jwt_decode(localStorage.getItem("token")).userId;
            const response = await axios
                .get(
                    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/portfolio/user/${userId}`,
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                            "Content-Type": "Application/json",
                        },
                    }
                )
                .then((result) => {
                    //console.log(result.data);
                    // TO-DO: Update after sorting out auth
                    setUserPortfolioDetails(result.data);
                    // setIsLoaded(true);
                })
                .catch((error) => {
                    // console.log(`error: ${error}`);
                    setErrors(error);
                    // setUserPortfolioDetails("$");
                });
        }
        // setIsLoaded(true)
    };

    // console.log(userDetails["email"]);
    // console.log(userPortfolioDetails);

    const getBlogs = async () => {
        // setIsLoaded(false);
        const response = await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/blogs`)
            .then((result) => {
                setBlogs(result.data);
                // setIsLoaded(true);
            })
            .catch((error) => {
                setErrors(error);
                // setIsLoaded(true);
            });
    };

    const getFAQs = async () => {
        // setIsLoaded(false);
        const response = await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/faqs`)
            .then((result) => {
                setFaqs(result.data);
                // setIsLoaded(true);
            })
            .catch((error) => {
                setErrors(error);
                // setIsLoaded(true);
            });
    };

    return (
        <AppContext.Provider
            value={{
                isLoaded,
                isAuth,
                checkAuth,
                errors,
                setErrors,
                userDetails,
                setUserDetails,
                setUserDetails,
                userPortfolioDetails,
                companies,
                blogs,
                faqs,
                transRecords,
                handleLogin,
                handleLogout,
                VerifyEmail,
                getCompany,
                getUserPortfolioDetails,
                kycForm,
                setKycForm,
                alerts,
                setAlerts,
                showModal,
                setShowModal,
                showAlert,
                setShowAlert,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
