import { Item, Span } from "react-html-email";
import React from "react";

export const BodyHeader = props => (
  <Item style={props.styles.item}>
    <Span style={props.styles.span}>
      <h2>{props.bodyHeaderText}</h2>
    </Span>
  </Item>
);
