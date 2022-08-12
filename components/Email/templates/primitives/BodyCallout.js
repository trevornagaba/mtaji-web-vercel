import { Item, A } from "react-html-email";
import React from "react";

export const BodyCallout = props => (
  <Item align={props.styles.itemAlign} style={props.styles.item}>
    <A
      href={props.bodyCalloutHref}
      textDecoration={props.styles.a.textDecoration}
      style={props.styles.a}
    >
      {props.bodyCalloutText}
    </A>
  </Item>
);
