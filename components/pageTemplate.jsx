import React from "react";
import Header from "./Header";
import styles from "../styles/pageTemplate.module.css";
import Footer from "./Footer";
import RaiseFunds from "./RaiseFunds";
import SubscribeCard from "./Blog/subscribeCard";

import AppContextProvider from "../components/AppContext"

const Wrapper = ({ children }) => {
    return(
        <div className={styles.Wrapper}>
            {children}
        </div>
    )
};
const PageTemplate = ({
    hasNavbar,
    hasFooter,
    hasRaiseFunds,
    hasSubscribetoBlog,
    hasWrapper,
    children,
    isGreyBackgound
}) => {
    return (
        <div style={isGreyBackgound && {backgroundColor:"#F7F7F7"}}>
            {hasNavbar && <Header isGreyBackgound={isGreyBackgound} />}
            {hasWrapper ?
                <Wrapper>
                    {children}
                </Wrapper>
            : children
            }
            {hasRaiseFunds&&<RaiseFunds/>}
            {hasSubscribetoBlog&&<SubscribeCard />}
            {hasFooter && <Footer />}
            
        </div>
        
    );
};

export default PageTemplate;
