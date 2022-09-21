import { HTSReactForm } from "hts-react-form";
import React, { useState } from "react";

import styles from "../styles/components/OpinionBox.module.css";
import AllReviews from "./AllReviews";
import Button from "./Button";
import Rating from "./Rating";

export default function OpinionBox() {
  const [showAllReview, setShowAllReviews] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const setUserRating = (value) => {
    setRating(value);
  };

  const setCommentValue = (e) => {
    setComment(e.target.value);
  };

  const onPostComment = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.opinion__container}>
      <div className={styles.opinion__rating}>
        <p>Rate this post</p>
        <div className={styles.opinion__rating__star}>
          <Rating value={rating} onChange={setUserRating} />
          <Button
            onClick={() => setShowAllReviews(true)}
            title="View All Ratings"
            theme="secondary-slim"
            spacingX={1}
          />
          {showAllReview && (
            <AllReviews show={showAllReview} callback={setShowAllReviews} />
          )}
        </div>
      </div>
      <div className={styles.opinion__comments}>
        <p>Write a Comment</p>
        <HTSReactForm
          controls={[
            {
              type: "textarea",
              name: "comment",
              placeholder: "Share your comment...",
              value: comment,
              onChange: setCommentValue,
              className: styles.opinion__comments__form__input,
            },
          ]}
          actionControl={{
            label: "Post",
            onSubmit: onPostComment,
            className: styles.opinion__comments__form__btn,
          }}
          className={styles.opinion__comments__form}
        />
      </div>
    </div>
  );
}
