import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AppContainer from "../components/AppContainer";
import NextImage from "../components/NextImage";
import TrendingTopics from "../components/TrendingTopics";

import styles from "../styles/SingleBlog.module.css";

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
            <h1>
              Memo To All Housekeeping, Kitchen, and Dining Room Staff At
              Mar-A-Lago
            </h1>

            <div className={styles.blog__image}>
              <NextImage
                src="https://images.unsplash.com/photo-1444676632488-26a136c45b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBrZWVwdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="blog"
              />
            </div>
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
