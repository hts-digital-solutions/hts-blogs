import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutAuthor from "../components/AboutAuthor";
import AppContainer from "../components/AppContainer";
import NextImage from "../components/NextImage";
import OpinionBox from "../components/OpinionBox";
import RelatedPosts from "../components/RelatedPosts";
import TrendingTopics from "../components/TrendingTopics";

import styles from "../styles/SingleBlog.module.css";
import { _config } from "../utils/helper_functions";

const tags = ["Github", "npm", "Github Enterprise"];
const author = {
  image:
    "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  name: "Tridev Sharma",
  about: `The GitHub Actions team has done lots of work to improve the
  performance and resource consumption of Actions on GHES in the past
  year.`,
};

export default function ViewBlog() {
  const shareIt = () => {
    if (typeof window !== "undefined" && navigator?.canShare) {
      navigator?.share({
        url: _config("baseUrl") + "/sample-blog",
        text: `The GitHub Actions team has done lots of work to improve the
        performance and resource consumption of Actions on GHES in the
        past year.`,
        title: `How we tripled max concurrent jobs to boost performance of GitHub
        Actions`,
      });
    }
  };

  return (
    <AppContainer>
      <Head>
        <title>
          How we tripled max concurrent jobs to boost performance of GitHub
          Actions
        </title>
        <meta
          name="description"
          content="How we tripled max concurrent jobs to boost performance of
                GitHub Actions"
        />
      </Head>
      <div className={styles.blog__wrapper}>
        <div className={styles.blog__content}>
          <div className={styles.blog__read_section}>
            <div className={styles.blog__image}>
              <div className={styles.blog__avg_rating}>
                <i className="la la-star"></i>
                <span>4.5</span>
              </div>
              <NextImage
                src="https://images.unsplash.com/photo-1444676632488-26a136c45b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBrZWVwdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="blog"
              />
              <h1 className={styles.blog__title}>
                How we tripled max concurrent jobs to boost performance of
                GitHub Actions
              </h1>
              <p>
                The GitHub Actions team has done lots of work to improve the
                performance and resource consumption of Actions on GHES in the
                past year.
              </p>

              <div className={styles.blog__share}>
                <button data-color="blue" onClick={shareIt}>
                  <i className="la la-share-square"></i>
                </button>
              </div>
            </div>

            <div className={styles.blog__contentbox}></div>
          </div>

          <div className={styles.blog__tags}>
            <h2>Tags</h2>
            <div className={styles.blog__tags__items}>
              {tags.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </div>
          <div className={styles.blog__author__details}>
            <h2>About Author</h2>
            <AboutAuthor author={author} />
          </div>
          <div className={styles.blog__rating}>
            <h2>Share your opinion</h2>
            <OpinionBox />
          </div>
          <div className={styles.blog__related}>
            <h2>Related Posts</h2>
            <RelatedPosts />
          </div>
        </div>
        <div className={styles.blog__sidebar}>
          <h2>Trending Topics</h2>
          <TrendingTopics />
        </div>
      </div>
    </AppContainer>
  );
}
