import React from "react";
import { Mailer } from 'nodemailer-react';
import { theme } from "./templates/Signup/theme";
import { EmailVerificationTheme } from "./templates/HtmlEmail";
import logo from "./assets/logo.svg";
import "./styles.css";

const mockDownloadLink = "https://mtaji-web.netlify.app/confirmation/";
const websiteLink = "https://mtaji-web.netlify.app/confirmation/";
const companyLink = "https://mtaji-web.netlify.app";
const title = "Confirmation Email";
const emailHeaderText = "Confirmation Email";

const transport = {
    host: process.env.EMAIL_HOST,
    secure: true,
    auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASS 
    },
}

const defaults = {
    from: {
        name: "Mtaji",
        address: process.env.EMAIL_ACCOUNT
    },
}

const ReminderEmail = process.env.EMAIL_PASS

export const Template = (props) => {

    const { receiver, emailType, token } = props

    return (
        emailType==="newAccount"?
            <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
                <EmailVerificationTheme
                    theme={theme}
                    title={title}
                    emailHeaderHref={websiteLink}
                    emailHeaderText={emailHeaderText}
                    emailHeaderLogo={logo}
                    bodyHeaderText={`Hi ${receiver}👋,`}
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
                    bodyCalloutHref={`${mockDownloadLink}${token}`}
                    bodyCalloutText={"Confirm Account"}
                    bodyFooterText={`If you're having trouble accessing the link, copy and paste the following link into your web browser `}
                    bodyFooterHref={`${mockDownloadLink}${token}`}
                    copyrightLinkHref={companyLink}
                    copyrightLinkText={"Mansa Finance"}
                    debug={true}
                />
            </div>
        : ""
    )
}

const Email = async (props) => {
    
    const { receiver, emailType, token } = props

    // emailTypes = ['newAccount', 'passwordReset', 'newInvestment', 'investmentRecords', '']

    const EmailTemplate = <Template receiver={receiver} emailType={emailType} token={token}/>

    const mailer = Mailer(
        { transport, defaults },
        { EmailTemplate, PasswordEmail, ReminderEmail }
    )

    await mailer.send(ReminderEmail, {
        firstName: 'Mtaji',
        brand: 'Mtaji Inc',
    },
    {
        to: receiver.email
    })

    return (

    );
};

export default Email;
