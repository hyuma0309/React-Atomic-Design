/* @flow */
import * as React from "react";

import Button from "/src/components/atoms/button";
import Title from "/src/components/atoms/title";
import Form from "/src/components/atoms/form";


const test = () => {
  console.log("押されました");
};

const Block = (props) => (
  <>
    <Title>{props.title}</Title>
    <Form></Form>
    {props.children}
    <Button onClick={test}>{props.button}</Button>
  </>
);

export default Block;
