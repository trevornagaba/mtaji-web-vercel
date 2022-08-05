import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";


export const AppContext = createContext();

const AppContextProvider = (props) => {

    const router = useRouter();

    const [isLoaded, setIsLoaded] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(false);
    const [portfolio, setPortfolio] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [transRecords, setTransRecords] = useState([]);

    useEffect(() => {
        getCompanies();
    }, []);

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

    const getCompany = async (companyId) => {
        return (companies.find(company => company.id===companyId))
    }

    const getCompanies = async () => {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/companies`
        )
        .then((result) => {
            setCompanies(result.data);
            setIsLoaded(true);
        })
        .catch((error) => {
            setErrors(error);
            setIsLoaded(true);
        });
    }

    return (
        <AppContext.Provider
            value={{
                isLoaded,
                isAuth,
                errors,
                portfolio,
                companies,
                faqs,
                transRecords,
                handleLogin,
                getCompany
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
