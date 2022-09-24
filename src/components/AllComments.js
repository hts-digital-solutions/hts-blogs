import Image from "next/image";
import React, { useState } from "react";

import styles from "../styles/components/AllComments.module.css";
import AddComment from "./AddComment";
import Popup from "./Popup";

const comments = [
  {
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Tridev Sharma",
    comment:
      "This post is mind blowing and i must say it helped me a lot while i was searching on all websites for this information but i got here. This post is mind blowing and i must say it helped me a lot while i was searching on all websites for this information but i got here.",
  },
  {
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Sanjiv Kumar Pandit",
    comment:
      "This post is mind blowing and i must say it helped me a lot while i was searching on all websites for this information but i got here. This post is mind blowing and i must say it helped me a lot while i was searching on all websites for this information but i got here.",
  },
];

export default function AllComments({ show, callback }) {
  const handleClose = () => {
    callback(false);
  };
  return (
    <React.Fragment>
      <Popup show={show} onClose={handleClose}>
        <div className={styles.comments__container}>
          <div className={styles.comments__title}>
            <h3>All Comments</h3>
            <p>What people think about this post</p>
          </div>

          <div className={styles.comments_list}>
            {comments.map((comment, index) => (
              <CommentItem key={index} comment={comment} />
            ))}
          </div>
        </div>
      </Popup>
    </React.Fragment>
  );
}

const CommentItem = ({ comment }) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const toggleCommentBox = () => {
    setShowCommentBox((prev) => !prev);
  };
  return (
    <div className={styles.comments__item}>
      <div className={styles.comments__item_user}>
        <Image
          src={comment?.image}
          alt={comment.name}
          width={50}
          height={50}
          objectFit="cover"
          className={styles.comments__item_userimage}
        />
        <div className={styles.comments__item_user_exp}>
          <h4>{comment.name}</h4>
          <p>{comment.comment}</p>

          <div className={styles.comments__replies}>
            <button onClick={toggleCommentBox}>
              <i className="la la-reply"></i> 32
            </button>
            <button>
              <i className="la la-thumbs-up"></i> 20
            </button>
            <button>
              <i className="la la-thumbs-down"></i> 20
            </button>
          </div>
          {showCommentBox && <AddComment />}
        </div>
      </div>
    </div>
  );
};
