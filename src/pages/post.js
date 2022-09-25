import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import AppContainer from "../components/AppContainer";
import Button from "../components/Button";
const HtmlEditor = dynamic(() => import("../components/HtmlEditor"), {
  ssr: false,
});

import styles from "../styles/Post.module.css";

export default function Post() {
  return (
    <AppContainer>
      <Head>
        <title>Share your thoughts, knowledge...</title>
      </Head>
      <div className={styles.post__container}>
        <h1>
          <i className="la la-feather"></i> New Post
        </h1>

        <form className={styles.post__form}>
          <div className={styles.post__input}>
            <input
              className={styles.title}
              type="text"
              name="title"
              placeholder="Post title"
            />
          </div>

          <div className={styles.post__input}>
            <textarea name="description" placeholder="About post"></textarea>
          </div>

          <div className={styles.post__input}>
            <HtmlEditor />
          </div>

          <div className={styles.post__input} style={{ textAlign: "right" }}>
            <Button title="Save Draft" theme="secondary" />
            <Button title="Post" theme="primary" />
          </div>
        </form>
      </div>
    </AppContainer>
  );
}
