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
        let headers = {

        }
        // try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                'Content-Type': 'Application/json',
                },
                userData
            }
            
        )
        .then((result) => {
            console.log(result.data)
            setIsAuth(true)
            setIsLoaded(true);
            router.push("/");
        })
        .catch((error) => {
            setErrors(error)
        })
    };



    const getCompany = async () => {
        const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/companies/626fde9f814d1b197742cab2` //TO-DO: route from explore page should pass a company id
            )
            .then((result) => {
                setCompany(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

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
