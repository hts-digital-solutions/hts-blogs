import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useCallback, useState } from "react";
import AppContainer from "../components/AppContainer";
import Button from "../components/Button";
import InputTagger from "../components/InputTagger";
const HtmlEditor = dynamic(() => import("../components/HtmlEditor"), {
  ssr: false,
});

import styles from "../styles/Post.module.css";

const initialState = {
  title: "",
  description: "",
  topic: "",
  content: "",
  tags: [],
};

export default function Post() {
  const [post, setPost] = useState(initialState);

  const handleTags = useCallback((tags) => {
    setPost((prev) => ({ ...prev, tags }));
  }, []);

  const handleValue = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

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
              value={post.title}
              onChange={handleValue}
            />
          </div>

          <div className={styles.post__input}>
            <textarea
              name="description"
              placeholder="About post"
              value={post.description}
              onChange={handleValue}
            ></textarea>
          </div>

          <InputTagger
            value={post.tags}
            onChange={handleTags}
            styles={{
              wrapper: styles.post__input_tags,
              container: styles.post_tags,
            }}
          />

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
