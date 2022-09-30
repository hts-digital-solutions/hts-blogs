import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useRef, useState } from "react";
import AppContainer from "../components/AppContainer";
import Button from "../components/Button";
const HtmlEditor = dynamic(() => import("../components/HtmlEditor"), {
  ssr: false,
});

import styles from "../styles/Post.module.css";

export default function Post() {
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");

  const handleCurrentTagChange = (e) => {
    setCurrentTag(e.target.value);
  };

  const handleTag = (e) => {
    e.preventDefault();
    if (e.code === "Comma" && e.target.value !== ",") {
      setTags((prev) => [...prev, currentTag.replace(",", "")]);
      setCurrentTag("");
    }

    if (e.code === "Backspace" && tags.length > 0 && e.target.value === "") {
      setTags((prev) => prev.filter((_, index) => index !== prev.length - 1));
    }
  };

  const handleRemove = (e) => {
    e.preventDefault();
    const _index = e.target.getAttribute("data-remove");
    setTags((prev) => prev.filter((_, index) => index !== parseInt(_index)));
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
            />
          </div>

          <div className={styles.post__input}>
            <textarea name="description" placeholder="About post"></textarea>
          </div>

          <div className={styles.post__input_tags}>
            <div className={styles.post_tags}>
              {tags?.map((tag, index) => (
                <p key={index}>
                  {tag}{" "}
                  <i
                    className="la la-times"
                    data-remove={index}
                    onClick={handleRemove}
                  ></i>
                </p>
              ))}
              <input
                type="text"
                placeholder="Tags"
                value={currentTag}
                onChange={handleCurrentTagChange}
                onKeyUp={handleTag}
              />
            </div>
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
