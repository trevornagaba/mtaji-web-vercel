import React from "react";
import { EmailVerificationTheme } from "./themes/EmailVerification";
import { EmailGenerator } from "./HtmlEmail";

export const EmailVerification = props => <EmailGenerator {...props} theme={EmailVerificationTheme} />;
