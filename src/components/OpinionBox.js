import React from "react";

import styles from "../styles/components/OpinionBox.module.css";
import Rating from "./Rating";

export default function OpinionBox() {
  return (
    <div className={styles.opinion__container}>
      <div className={styles.opinion__rating}>
        <Rating value={4} />
      </div>
      <div className={styles.opinion__comments}></div>
    </div>
  );
}
