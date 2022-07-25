import React from "react";
import Navbar from "./Navbar";
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
        <div className={styles.containerWrapper} style={isGreyBackgound && {backgroundColor:"#F7F7F7"}}>
            {hasNavbar && <Navbar />}
            {hasWrapper ? 
                (<Wrapper>
                    {children}
                </Wrapper>
                ) : 
                (children.map(children=>children)) 
            }
            {hasRaiseFunds && <RaiseFunds />}
            {hasFooter && <Footer />}
        </div>
    );
};

export default PageTemplate;
