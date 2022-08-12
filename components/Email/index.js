import React from "react";
import { theme } from "./templates/Signup/theme";
import { EmailVerificationTheme } from "./templates/HtmlEmail";
import logo from "./assets/logo.svg";
import "./styles.css";

const mockDownloadLink = "https://mtaji-web.netlify.app/confirmation/";
const websiteLink = "https://mtaji-web.netlify.app/confirmation/";
const companyLink = "https://mtaji-web.netlify.app";
const title = "Email Verification";
const emailHeaderText = "Account Confirmation";

const Email = (props) => {
    
    const { token } = props

    return (
        <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
            <EmailVerificationTheme
                theme={theme}
                title={title}
                emailHeaderHref={websiteLink}
                emailHeaderText={emailHeaderText}
                emailHeaderLogo={logo}
                bodyHeaderText={`Hi there 👋,`}
                bodyContentComponent={() => {
                    const linkStyle = {
                        color: theme.emailBody.bodyContent.a.color,
                    };
                    return (
                        <>
                            <p>
                                Thanks for creating a Mtaji account. Please
                                verify your email by clicking the button below
                            </p>
                        </>
                    );
                }}
                bodyCalloutHref={`mockDownloadLink${token}`}
                bodyCalloutText={"Confirm Account"}
                bodyFooterText={`If you're having trouble accessing the link, copy and paste the following link into your web browser `}
                bodyFooterHref={`mockDownloadLink${token}`}
                copyrightLinkHref={companyLink}
                copyrightLinkText={"mtaji"}
                debug={true}
            />
        </div>
    );
};

export default Email;
