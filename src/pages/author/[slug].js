import Head from "next/head";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AboutAuthor from "../../components/AboutAuthor";
import AppContainer from "../../components/AppContainer";
import Button from "../../components/Button";
import TrendingBlogs from "../../components/TrendingBlogs";
import { blogs, topAuthors } from "../../dummy";
import { setAlertInfo } from "../../store/slices/EnvironmentSlice";

import styles from "../../styles/AuthorSingle.module.css";

const author = topAuthors[0];

function AuthorPageContainer() {
  const dispatch = useDispatch();
  const [following, setFollowing] = useState(false);

  const onClickFollow = () => {
    dispatch(
      setAlertInfo({
        data: {
          type: "processing",
        },
      })
    );

    setTimeout(() => {
      dispatch(
        setAlertInfo({
          data: {
            type: "success",
            icon: "la la-check",
            message: !following
              ? "You followed him successfully."
              : "You unfollwed him.",
          },
        })
      );

      setFollowing((prev) => !prev);
    }, 1000);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Tridev Sharma</title>
      </Head>

      <div className={styles.author_single__container}>
        <div className={styles.author_single__posts}>
          <TrendingBlogs trendingBlogs={blogs} />
        </div>
        <div className={styles.author_single__details}>
          <div className={styles.author_single__details_wrapper}>
            <AboutAuthor author={author} details={true} />
          </div>

          <div className={styles.author_single__stat_wrapper}>
            <p className={styles.author__posts_stat}>
              {author?.total_posts} <small>posts</small>
            </p>
            <Button
              title={following ? "Following" : "Follow"}
              onClick={onClickFollow}
              theme={!following ? "primary" : "secondary"}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default function AuthorPage() {
  return (
    <AppContainer>
      <AuthorPageContainer />
    </AppContainer>
  );
}
