import { Item, Span, A } from "react-html-email";
import React from "react";

export const BodyFooter = props => (
  <Item style={props.styles.item}>
    <Span color={props.styles.span.color}>
      <p>
        {props.bodyFooterText}
        <A style={props.styles.a}>{props.bodyFooterHref}</A>
      </p>
    </Span>
  </Item>
);
