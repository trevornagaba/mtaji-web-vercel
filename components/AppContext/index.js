import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import jwt_decode from 'jwt-decode';


export const AppContext = createContext();

const AppContextProvider = (props) => {

    const router = useRouter();

    const [isLoaded, setIsLoaded] = useState(false);
    const [token, setToken] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [companies, setCompanies] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [transRecords, setTransRecords] = useState([]);
    const [kycForm, setKycForm] = useState({
        front: '',
        back: ''
    })

    useEffect(() => {
        getCompanies();
    }, []);

    const checkAuth = async () => {
        setIsLoaded(false)
        try {
            if(jwt_decode(localStorage.getItem("token"))){
                setUserDetails(await jwt_decode(localStorage.getItem("token")))
                setIsAuth(true)
                setIsLoaded(true)
            }
        }
        catch(err){
            setIsLoaded(true)
            setIsAuth(false)
            router.push("/login");
        }
    };

    const handleLogin = async (userData) => {
        setIsLoaded(false)

        // try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                'Content-Type': 'Application/json',
                },
                email: userData.email, password: userData.password
            }            
        )
        .then((result) => {         
            localStorage.setItem("token", result.data.token);
            setIsAuth(true);
            setIsLoaded(true);
            router.push("/home");
        })
        .catch((error) => {
            setErrors(error)
        })
    };

    const handleLogout = () => {
      localStorage.removeItem("token");
      setIsAuth(true);
      setIsLoaded(true);
      router.push("/login");
      
    }

    const getuserDetails = async () => {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users`, {
                method: 'POST',
                headers: {
                'Content-Type': 'Application/json',
                'Authorization': `Bearer `
                }
            }
        )
        .then((result) => {
            // TO-DO: Update after sorting out auth
            if (result.data == "Please login") {
                setUserDetails("$");
            } else {
                setUserDetails(result.data.userDetails);
            }
        })
        .catch((error) => {
            // console.log(error);
            setUserDetails("$");
        });
    }

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

    const getBlogs = async () => {
        setIsLoaded(false);
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/blogs`
        )
        .then((result) => {
            setBlogs(result.data);
            setIsLoaded(true);
        })
        .catch((error) => {
            setErrors(error);
            setIsLoaded(true);
        });
    }

    const getFAQs = async () => {
        setIsLoaded(false);
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/faqs`
        )
        .then((result) => {
            setFaqs(result.data);
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
                checkAuth,
                errors,
                userDetails,
                companies,
                blogs,
                faqs,
                transRecords,
                handleLogin,
                handleLogout,
                getCompany,
                kycForm,
                setKycForm
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
