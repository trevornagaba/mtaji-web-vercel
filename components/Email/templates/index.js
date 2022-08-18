import React from "react";
import { EmailVerificationTheme } from "./themes/EmailVerification";
import { EmailGenerator } from "./HtmlEmail";

export const EmailTemplate = props => <EmailGenerator {...props} theme={EmailVerificationTheme} />;
