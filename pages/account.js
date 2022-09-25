import React, { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import AccountForm from "../components/Forms/AccountForm";
import KycForm from "../components/Forms/KycForm";
import SecurityForm from "../components/Forms/SecurityForm";
import Modal from "../components/ModalComponent";
import PageTemplate from "../components/pageTemplate";
import styles from "../styles/account.module.css";
import Head from "next/head";
import { AppContext } from "../components/AppContext";


const tabs = ["Account", "KYC", "Security"];
const Account = () => {
    const {checkAuth, userDetails, isLoaded} = useContext(AppContext)
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const [user, setUser] = useState({})
    
    const onClickTab = (tab) => {
        setSelectedTab(tab);
    };

    useEffect(() => {
        // checkAuth()
    }, [isLoaded]);

    return (
        <PageTemplate
            hasNavbar={true}
            hasWrapper={false}
            isGreyBackgound={true}
            hasFooter={true}
        >
            <Head>
                <title>Personalise your account</title>
                <meta
                    name="description"
                    content="Set up your account to receive equity in African businesses"
                />
            </Head>

            <p className={styles.heading}>Profile</p>
            <div className={styles.contentBox}>
                <div className={styles.tabNav}>
                    {tabs?.map((tab) => {
                        return (
                            <div
                                key={tab}
                                onClick={() => onClickTab(tab)}
                                className={
                                    selectedTab == tab
                                        ? styles.selectedTab
                                        : styles.tab
                                }
                            >
                                <p>{tab}</p>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.tabContent}>
                    {selectedTab == "Account" ? (
                        <AccountForm />
                    ) : selectedTab == "KYC" ? (
                        <KycForm userId={userDetails.userId} />
                    ) : (
                        <SecurityForm userId={userDetails.userId} />
                    )}
                </div>
            </div>
            {/* <Modal openModal={openModal}/> */}
        </PageTemplate>
    );
};

export default Account;