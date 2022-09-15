import Head from "next/head";
import AppContainer from "../components/AppContainer";
import BlogItem from "../components/BlogItem";
import DiscoverTags from "../components/DiscoverTags";
import TrendingBlogs from "../components/TrendingBlogs";
import TrendingTopics from "../components/TrendingTopics";

import styles from "../styles/Home.module.css";

const blogs = [
  {
    title:
      "Memo To All Housekeeping, Kitchen, and Dining Room Staff At Mar-A-Lago",
    slug: "",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBrZWVwdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Apple’s Next Big Thing: A Business Model Change",
    slug: "",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Ukraine War, 10 September 2022",
    slug: "",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dWtyYWluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Software Component Names Should Be Whimsical And Cryptic",
    slug: "",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8c29mdHdhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "The Difference Between The Clever Developer & The Wise Developer",
    slug: "",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

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
    </AppContainer>
  );
}
