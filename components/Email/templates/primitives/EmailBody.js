import React from "react";
import { BodyHeader } from "./BodyHeader";
import { BodyContent } from "./BodyContent";
import { BodyCallout } from "./BodyCallout";
import { BodyFooter } from "./BodyFooter";
import { Box } from "react-html-email";

export const EmailBody = ({
  bodyHeaderText,
  bodyContentComponent,
  bodyCalloutHref,
  bodyCalloutText,
  bodyFooterText,
  bodyFooterHref,
  styles: { box, bodyHeader, bodyContent, bodyCallout, bodyFooter }
}) => (
  <Box align={box.align} style={box.style}>
    <BodyHeader bodyHeaderText={bodyHeaderText} styles={bodyHeader} />
    <BodyContent
      bodyContentComponent={bodyContentComponent}
      styles={bodyContent}
    />
    <BodyCallout
      bodyCalloutHref={bodyCalloutHref}
      bodyCalloutText={bodyCalloutText}
      styles={bodyCallout}
    />
    <BodyFooter
      bodyFooterText={bodyFooterText}
      bodyFooterHref={bodyFooterHref}
      styles={bodyFooter}
    />
  </Box>
);
