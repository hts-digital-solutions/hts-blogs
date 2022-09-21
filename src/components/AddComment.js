import { useState } from "react";
import { HTSReactForm } from "hts-react-form";

import styles from "../styles/components/AddComment.module.css";

export default function AddComment() {
  const [comment, setComment] = useState("");

  const setCommentValue = (e) => {
    setComment(e.target.value);
  };

  const onPostComment = (e) => {
    e.preventDefault();
  };

  return (
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
  );
}
