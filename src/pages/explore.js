import Head from "next/head";
import AppContainer from "../components/AppContainer";
import DiscoverTags from "../components/DiscoverTags";

import styles from "../styles/Home.module.css";
import { _config } from "../utils/helper_functions";


function Explore() {
  return (
    <>
      <Head>
        <title>Explore | {_config("website-name")}</title>
      </Head>
      <div className={styles.home__container}>
        <div className={`${styles.home__main} ${styles.story_page}`}>
          <h1>Explore</h1>
        </div>
        <div className={`${styles.home__most_used_tags} ${styles.story_page}`}>
          <h2>Discover what people love</h2>

          <DiscoverTags />
        </div>
      </div>
    </>
  );
}

export default function ExplorePage() {
  return (
    <AppContainer>
      <Explore />
    </AppContainer>
  )
}