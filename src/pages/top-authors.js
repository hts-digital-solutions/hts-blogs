import Head from "next/head";
import { useState } from "react";
import AppContainer from "../components/AppContainer";
import Author from "../components/Author";
import DiscoverTags from "../components/DiscoverTags";
import { topAuthors } from "../dummy";

import styles from "../styles/Home.module.css";
import { _config } from "../utils/helper_functions";


function TopAuthors() {

  return (
    <>
      <Head>
        <title>Top Authors | {_config("website-name")}</title>
      </Head>
      <div className={styles.home__container}>
        <div className={`${styles.home__main} ${styles.story_page}`}>
          <h1>Top Authors</h1>

          <div className={styles.authors__container}>
            {
              topAuthors.map((author, index) => <Author key={index} author={author} />)
            }

          </div>
        </div>
        <div className={`${styles.home__most_used_tags} ${styles.story_page}`}>
          <h2>Discover what people love</h2>

          <DiscoverTags />
        </div>
      </div>
    </>
  );
}

export default function TopAuthorsPage() {
  return (
    <AppContainer>
      <TopAuthors />
    </AppContainer>
  )
}