import React, { useState } from "react";

import styles from "../styles/components/OpinionBox.module.css";
import AllReviews from "./AllReviews";
import Button from "./Button";
import Rating from "./Rating";

export default function OpinionBox() {
  const [showAllReview, setShowAllReviews] = useState(false);
  return (
    <div className={styles.opinion__container}>
      <div className={styles.opinion__rating}>
        <p>Rate this post</p>
        <div className={styles.opinion__rating__star}>
          <Rating value={0} />
          <Button
            onClick={() => setShowAllReviews(true)}
            title="View All"
            theme="primary-slim"
            spacingX={1}
          />
          {showAllReview && (
            <AllReviews show={showAllReview} callback={setShowAllReviews} />
          )}
        </div>
      </div>
      <div className={styles.opinion__comments}></div>
    </div>
  );
}
