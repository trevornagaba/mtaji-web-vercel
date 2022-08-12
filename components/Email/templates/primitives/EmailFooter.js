import React from "react";
import { Item, Span, A } from "react-html-email";

export const EmailFooter = props => (
  <Item align={props.styles.itemAlign} style={props.styles.item}>
    <Span color={props.styles.span.color}>
      ©{" "}
      <A href={props.copyrightLinkHref} color={props.styles.a.color}>
        {props.copyrightLinkText}
      </A>{" "}
      {new Date().getFullYear()} all rights reserved.
    </Span>
  </Item>
);
