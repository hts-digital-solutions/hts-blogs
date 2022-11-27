import Head from "next/head";
import AppContainer from "../../components/AppContainer";
import DiscoverTags from "../../components/DiscoverTags";

import styles from "../../styles/Home.module.css";
import { _config } from "../../utils/helper_functions";
import { blogs, topTopics } from "../../dummy";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BlogItem from "../../components/BlogItem";

function TopicFeed() {
  const [topic, setTopic] = useState("");
  const router = useRouter();

  useEffect(() => {
    const slug = router.query.slug;
    setTopic(topTopics.find((t) => t.slug === slug));
  }, []);

  return (
    <>
      <Head>
        <title>
          {topic?.title} | {_config("website-name")}
        </title>
      </Head>
      <div className={styles.home__container}>
        <div className={`${styles.home__main} ${styles.story_page}`}>
          <h1>{topic?.title}</h1>
          <p>{topic?.description}</p>

          <div className={styles.home__blogs}>
            {blogs?.map((blog, index) => (
              <BlogItem key={index} blog={blog} />
            ))}
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

export default function TopicFeedPage() {
  return (
    <AppContainer>
      <TopicFeed />
    </AppContainer>
  );
}
