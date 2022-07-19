import React, { useEffect, useState } from "react";
import AccountForm from "../components/Forms/AccountForm";
import KycForm from "../components/Forms/KycForm";
import SecurityForm from "../components/Forms/SecurityForm";
import Modal from "../components/ModalComponent";
import PageTemplate from "../components/pageTemplate";
import styles from "../styles/account.module.css";

const tabs = ["Account", "KYC", "Security"];
const Account = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const onClickTab = (tab) => {
        setSelectedTab(tab);
    };
    

    return (
        <PageTemplate 
        hasNavbar={true} 
        hasWrapper={false}
        isGreyBackgound={true}
        >
            <p className={styles.heading}>Profile</p>
            <div className={styles.contentBox}>
                <div className={styles.tabNav}>
                    {tabs.map((tab) => {
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
                    {selectedTab == 'Account' ?
                    <AccountForm /> : selectedTab == 'KYC' ? <KycForm/> : <SecurityForm/> 
                    }
                </div>
            </div>
            {/* <Modal openModal={openModal}/> */}
        </PageTemplate>
    );
};

export default Account;