import React from "react";
import { Item, Span, A } from "react-html-email";

export const EmailHeader = ({
  styles,
  title,
  emailHeaderHref,
  emailHeaderText,
  emailHeaderLogo
}) => (
  <Item align={styles.itemAlign} style={styles.item}>
    <Span>
      <h1>
        <A
          href={emailHeaderHref}
          textDecoration={styles.a.textDecoration}
          style={styles.a}
        >
          {emailHeaderLogo && (
            <img style={styles.logo} src={emailHeaderLogo} alt={title} />
          )}
          {!emailHeaderLogo && title}
        </A>
      </h1>
    </Span>
    <Span>
      <h2 style={styles.emailHeaderText}>{emailHeaderText}</h2>
    </Span>
  </Item>
);
