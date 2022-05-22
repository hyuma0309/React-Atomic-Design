import React, { useMemo } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Block from "../components/molecules/block";

const Design: NextPage = () => {
  return (
    <div className={styles.container}>
      <Block title="Atom" button="Learn more">
        <p>Atomic Design</p>
      </Block>
    </div>
  );
};

export default Design;
