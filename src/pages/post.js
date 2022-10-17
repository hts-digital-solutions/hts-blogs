import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useCallback, useState } from "react";
import AppContainer from "../components/AppContainer";
import Button from "../components/Button";
import InputTagger from "../components/InputTagger";
const HtmlEditor = dynamic(() => import("../components/HtmlEditor"), {
  ssr: false,
});
import { useDispatch } from "react-redux"

import styles from "../styles/Post.module.css";
import { setAlertInfo } from "../store/slices/EnvironmentSlice";
import Popup from "../components/Popup";
import TopicSelector from "../components/TopicSelector";

const initialState = {
  title: "",
  description: "",
  content: "",
  tags: [],
  topicId: null
};

function Post() {
  const [post, setPost] = useState(initialState);
  const [topicSelector, setTopicSelector] = useState(false)
  const dispatch = useDispatch()

  const handleTags = useCallback((tags) => {
    setPost((prev) => ({ ...prev, tags }));
  }, []);

  const handleValue = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleContent = useCallback(value => {
    setPost(prev => ({ ...prev, content: value }))
  }, [])

  const handlePopupClose = () => {
    setTopicSelector(false)
  }

  const handlePostAction = e => {
    e.preventDefault();
    setTopicSelector(true)
  }

  const handlePost = (id) => {
    setTopicSelector(false)
    dispatch(setAlertInfo({
      data: {
        type: 'processing'
      }
    }))

    setTimeout(() => {
      dispatch(setAlertInfo({
        data: {
          type: 'success',
          message: 'Congratulations! You have just posted your first post.',
          icon: 'la la-check'
        }
      }))
    }, 2000)
  }

  const handleDraft = (e) => {
    e.preventDefault();
    setTopicSelector(true)
  }

  return (
    <React.Fragment>
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
          />

          <div className={styles.post__input}>
            <HtmlEditor onChange={handleContent} />
          </div>

          <div className={styles.post__input} style={{ textAlign: "right" }}>
            <Button title="Save Draft" theme="secondary" onClick={handleDraft} />
            <Button title="Post" theme="primary" onClick={handlePostAction} />
          </div>
        </form>

        <Popup show={topicSelector} onClose={handlePopupClose}>
          <TopicSelector title="Select a topic to post in" onPostIn={handlePost} />
        </Popup>

      </div>
    </React.Fragment>
  );
}

export default function PostPage() {
  return (
    <AppContainer>
      <Post />
    </AppContainer>
  )
}