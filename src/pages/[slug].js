import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutAuthor from "../components/AboutAuthor";
import AppContainer from "../components/AppContainer";
import NextImage from "../components/NextImage";
import RelatedPosts from "../components/RelatedPosts";
import TrendingTopics from "../components/TrendingTopics";

import styles from "../styles/SingleBlog.module.css";

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
  return (
    <AppContainer>
      <Head>
        <title>
          Memo To All Housekeeping, Kitchen, and Dining Room Staff At Mar-A-Lago
        </title>
      </Head>
      <div className={styles.blog__wrapper}>
        <div className={styles.blog__content}>
          <div className={styles.blog__author}>
            <Image
              src="/assets/profile.jpeg"
              width={50}
              height={50}
              objectFit="cover"
              className={styles.author__image}
            />
            <div className={styles.author__info}>
              <Link href="/">
                <a>
                  <h4>Tridev Sharma</h4>
                </a>
              </Link>
              <div className={styles.author__social}>
                <i className="la la-facebook"></i>
                <i className="la la-twitter"></i>
                <i className="la la-linkedin"></i>
                <i className="la la-instagram"></i>
                <i className="la la-github"></i>
              </div>
            </div>
          </div>

          <div className={styles.blog__read_section}>
            <div className={styles.blog__image}>
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
                <button data-color="blue">
                  <i className="la la-facebook"></i>
                </button>
                <button>
                  <i className="la la-twitter"></i>
                </button>
                <button>
                  <i className="la la-whatsapp"></i>
                </button>
              </div>
            </div>

            <div className={styles.blog__content}></div>
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
