/* @flow */
import * as React from "react";

const Button = (props) => {
  const { type, onClick, children } = props;

  return <button onClick={onClick}>{children}</button>;
};

export default Button;
