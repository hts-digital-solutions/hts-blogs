import Head from "next/head";
import AppContainer from "../components/AppContainer";
import DiscoverTags from "../components/DiscoverTags";
import TrendingBlogs from "../components/TrendingBlogs";
import TrendingTopics from "../components/TrendingTopics";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <AppContainer>
      <Head>
        <title>HTSDS Blogs</title>
      </Head>
      <h1 hidden>HTSDS Blogs</h1>

      <div className={styles.home__container}>
        <div className={styles.home__trending_topics}>
          <h2>Trending Topics</h2>
          <TrendingTopics />
        </div>
        <div className={styles.home__main}>
          <div className={styles.home__trending_blogs}>
            <h2>
              <i className="la la-sort-amount-up-alt"></i> Trending Now
            </h2>

            <TrendingBlogs />
          </div>
          <div className={styles.home__blogs}></div>
        </div>
        <div className={styles.home__most_used_tags}>
          <h2>Discover what people love</h2>

          <DiscoverTags />
        </div>
      </div>
    </AppContainer>
  );
}
