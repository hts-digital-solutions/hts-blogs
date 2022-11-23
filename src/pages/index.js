import Head from "next/head";
import AppContainer from "../components/AppContainer";
import BlogItem from "../components/BlogItem";
import DiscoverTags from "../components/DiscoverTags";
import TrendingBlogs from "../components/TrendingBlogs";
import TrendingTopics from "../components/TrendingTopics";
import { blogs } from "../dummy";

import styles from "../styles/Home.module.css";
import { _config } from "../utils/helper_functions";


function Home() {
  return (
    <>
      <Head>
        <title>{_config("website-name")}</title>
      </Head>
      <h1 hidden>{_config("website-name")}</h1>

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

            <TrendingBlogs trendingBlogs={blogs} />
          </div>
          <div className={styles.home__blogs}>
            {blogs?.map((blog, index) => (
              <BlogItem key={index} blog={blog} />
            ))}
          </div>
        </div>
        <div className={styles.home__most_used_tags}>
          <h2>Discover what people love</h2>

          <DiscoverTags />
        </div>
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  )
}