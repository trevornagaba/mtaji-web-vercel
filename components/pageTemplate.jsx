import React from "react";
import Navbar from "./Navbar/Navbar";
import styles from "../styles/pageTemplate.module.css";
import Footer from "./Footer";
import RaiseFunds from "./RaiseFunds";

const Wrapper = ({ children }) => {
    return(
    <div className={styles.Wrapper}>{children}</div>
    )
};
const PageTemplate = ({
    hasNavbar,
    hasFooter,
    hasRaiseFunds,
    hasWrapper,
    children,
}) => {
    return (
        <div className={styles.containerWrapper}>
            {hasNavbar && <Navbar />}
            {hasWrapper ? 
                (<Wrapper>
                    {children}
                </Wrapper>
                ) : 
                {children} 
            }
            {hasRaiseFunds && <RaiseFunds />}
            {hasFooter && <Footer />}
        </div>
    );
};

export default PageTemplate;
