import React from "react";

import styles from "../styles/components/OpinionBox.module.css";
import Button from "./Button";
import Rating from "./Rating";

export default function OpinionBox() {
  return (
    <div className={styles.opinion__container}>
      <div className={styles.opinion__rating}>
        <p>Rate this post</p>
        <div className={styles.opinion__rating__star}>
          <Rating value={0} />
          <Button title="View All" theme="primary-slim" spacingX={1} />
        </div>
      </div>
      <div className={styles.opinion__comments}></div>
    </div>
  );
}
