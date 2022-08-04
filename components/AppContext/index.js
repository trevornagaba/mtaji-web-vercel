import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";


export const AppContext = createContext();

const AppContextProvider = (props) => {

    const router = useRouter();

    const [isLoaded, setIsLoaded] = useState(false);
    const [errors, setErrors] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [portfolio, setPortfolio] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [transRecords, setTransRecords] = useState([]);

    setInterval(() => {
        setIsLoaded(true);
    }, 5000);

    const checkAuth = () => {
        let token = localStorage.getItem("token");
        // const response =
        setIsAuth(token);
    };

    const handleLogin = async (userData) => {
        setIsLoaded(false)
        // try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
            {
                username: userData.username,
                password: userData.password,
            },
            { withCredentials: true }
        )
        .then((result) => {
            console.log(result.data)
            console.log('TOKEN:=====>', response.data.token)
            setIsAuth(true)
            setIsLoaded(true);
            router.push("/");
        })
        .catch((error) => {
            setErrors(error)
        })
        //     if (response.data === "Incorrect password") {
        //         setErrors(response.data);
        //         setIsLoaded(true);
        //     } else if (response.data === "No user found") {
        //         setErrors(response.data);
        //         setIsLoaded(true);
        //     } else {
        //         // localStorage.setItem("token", response.data.token)
        //         console.log('TOKEN:=====>', response.data.token)
        //         setIsAuth(true)
        //         setIsLoaded(true);
        //         router.push("/");
        //     }
        // } catch (error) {
        //     setErrors("Oops! Something went wrong. Please try again.");
        //     setIsLoaded(true);
        // }
    };

    return (
        <AppContext.Provider
            value={{
                isLoaded,
                isAuth,
                handleLogin
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
