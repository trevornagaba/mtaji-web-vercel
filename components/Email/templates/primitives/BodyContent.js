import { Item, Span } from "react-html-email";
import React from "react";

export const BodyContent = props => (
  <Item style={props.styles.item}>
    <Span fontSize={props.styles.span.fontSize} style={props.styles.span}>
      <props.bodyContentComponent />
    </Span>
  </Item>
);
