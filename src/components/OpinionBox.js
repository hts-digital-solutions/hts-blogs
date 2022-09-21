import React, { useState } from "react";

import styles from "../styles/components/OpinionBox.module.css";
import AddComment from "./AddComment";
import AllComments from "./AllComments";
import AllReviews from "./AllReviews";
import Button from "./Button";
import Rating from "./Rating";

export default function OpinionBox() {
  const [showAllReview, setShowAllReviews] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const [rating, setRating] = useState(0);

  const setUserRating = (value) => {
    setRating(value);
  };

  const showReviews = () => {
    setShowAllReviews(true);
  };

  const showComments = () => {
    setShowAllComments(true);
  };

  return (
    <div className={styles.opinion__container}>
      <div className={styles.opinion__rating}>
        <p>Rate this post</p>
        <div className={styles.opinion__rating__star}>
          <Rating value={rating} onChange={setUserRating} />
          <Button
            onClick={showReviews}
            title="View All Ratings"
            theme="secondary-slim"
            spacingX={1}
          />
          <AllReviews show={showAllReview} callback={setShowAllReviews} />
        </div>
      </div>
      <div className={styles.opinion__comments}>
        <div className={styles.opinion__comments__title}>
          <p>Write a Comment</p>
          <button onClick={showComments}>
            20
            <i className="la la-comment"></i>
          </button>
          <AllComments show={showAllComments} callback={setShowAllComments} />
        </div>
        <AddComment />
      </div>
    </div>
  );
}
