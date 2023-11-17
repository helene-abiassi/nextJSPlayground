import Head from "next/head";
import React from "react";

import styles from "@/styles/Characters.module.css";

function characters() {
  return (
    <div>
      <Head>
        <title key="characters">Characters</title>
        <meta
          name="characters"
          content="character page for rick and morty project using NextJS"
        />
      </Head>
      <h1 className={styles.myH1}>Characters</h1>
    </div>
  );
}

export default characters;
