import React from "react";
import Popup from "./Popup";

import styles from "../styles/components/AllReviews.module.css";
import Image from "next/image";
import Rating from "./Rating";

const reviews = [
  {
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Tridev Sharma",
    rating: 5,
  },
];

export default function AllReviews({ show, callback }) {
  const handleClose = () => {
    callback(false);
  };

  return (
    <React.Fragment>
      <Popup show={show} onClose={handleClose}>
        <div className={styles.reviews__container}>
          <div className={styles.reviews__title}>
            <h3>All Ratings</h3>
            <p>What people think about this post</p>
          </div>

          <div className={styles.reviews_list}>
            {reviews.map((review, index) => (
              <ReviewItem key={index} review={review} />
            ))}
          </div>
        </div>
      </Popup>
    </React.Fragment>
  );
}

const ReviewItem = ({ review }) => {
  return (
    <div className={styles.reviews__item}>
      <div className={styles.reviews__item_user}>
        <Image
          src={review?.image}
          alt={review.name}
          width={50}
          height={50}
          objectFit="cover"
          className={styles.reviews__item_userimage}
        />
        <div className={styles.reviews__item_user_exp}>
          <h4>{review.name}</h4>
          <Rating value={review.rating} readOnly={true} />
        </div>
      </div>
    </div>
  );
};
