import Head from "next/head";
import AppContainer from "../components/AppContainer";
import DiscoverTags from "../components/DiscoverTags";
import Carousel from "react-grid-carousel";

import styles from "../styles/Home.module.css";
import exploreStyles from "../styles/Explore.module.css";
import { _config } from "../utils/helper_functions";
import { blogs, topTopics } from "../dummy";
import Image from "next/image";
import Link from "next/link";
import BlogItem from "../components/BlogItem";

function Explore() {
  return (
    <>
      <Head>
        <title>Explore | {_config("website-name")}</title>
      </Head>
      <div className={styles.home__container}>
        <div className={`${styles.home__main} ${styles.story_page}`}>
          <h1>Explore</h1>

          <div className={exploreStyles.top_topics__container}>
            <Carousel
              rows={1}
              cols={3}
              gap={20}
              autoplay={4000}
              showDots={true}
              hideArrow={true}
              loop={true}
              dotColorActive={"var(--primary-color)"}
            >
              {topTopics.map((topic, index) => (
                <Carousel.Item key={index}>
                  <Topic topic={topic} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <div className={`${styles.home__blogs} ${exploreStyles.blogs}`}>
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

export default function ExplorePage() {
  return (
    <AppContainer>
      <Explore />
    </AppContainer>
  );
}

const Topic = ({ topic }) => {
  return (
    <div className={exploreStyles.topic__container}>
      <Link href={`topic/${topic?.slug}`}>
        <a className={exploreStyles.topic__cover}>
          <Image
            src={topic?.cover_image}
            alt={topic?.title}
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </a>
      </Link>

      <div className={exploreStyles.topic__info}>
        <h2 className="truncate" title={topic.title}>
          {topic?.title}
        </h2>
      </div>
    </div>
  );
};
