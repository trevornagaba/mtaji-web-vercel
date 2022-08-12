import React from "react";
import { EmailHeader, EmailFooter, EmailBody } from "./primitives";
import { Email, renderEmail } from "react-html-email";

export const HtmlEmail = ({
  theme,
  title,
  emailHeaderHref,
  emailHeaderText,
  emailHeaderLogo,
  bodyHeaderText,
  bodyContentComponent,
  bodyCalloutHref,
  bodyCalloutText,
  bodyFooterText,
  bodyFooterHref,
  copyrightLinkHref,
  copyrightLinkText
}) => (
  <Email title={title} style={theme.email}>
    <EmailHeader
      title={title}
      emailHeaderHref={emailHeaderHref}
      emailHeaderText={emailHeaderText}
      emailHeaderLogo={emailHeaderLogo}
      styles={theme.emailHeader}
    />
    <EmailBody
      bodyHeaderText={bodyHeaderText}
      bodyContentComponent={bodyContentComponent}
      bodyCalloutHref={bodyCalloutHref}
      bodyCalloutText={bodyCalloutText}
      bodyFooterText={bodyFooterText}
      bodyFooterHref={bodyFooterHref}
      styles={theme.emailBody}
    />
    <EmailFooter
      copyrightLinkHref={copyrightLinkHref}
      copyrightLinkText={copyrightLinkText}
      styles={theme.emailFooter}
    />
  </Email>
);

export const EmailGenerator = props => {
  const { debug, ...rest } = props;

  return (
    <>
      <HtmlEmail {...rest} />
    </>
  );
};
