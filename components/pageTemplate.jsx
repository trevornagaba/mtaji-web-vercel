import React from "react";
import Header from "./Header";
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
    isGreyBackgound
}) => {
    return (
        <>
            {hasNavbar && <Header />}
            {hasWrapper ?
                <Wrapper>
                    {children}
                </Wrapper>
            : children
            }
            {hasFooter && <Footer />}
        </>
    );
};

export default PageTemplate;
