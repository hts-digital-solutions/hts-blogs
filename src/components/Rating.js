import React, { useEffect, useState } from "react";

import styles from "../styles/components/Rating.module.css";

export default function Rating({ value, count = 5 }) {
  const [starValue, setStarValue] = useState(value);

  useEffect(() => {
    handleStarColor(starValue);
    return () => {
      setStarValue(0);
    };
  }, [value]);

  const handleClick = (e) => {
    e.preventDefault();
    const pos = e.target.getAttribute("data-pos");
    setStarValue(pos);
  };

  const handleOver = (e) => {
    e.preventDefault();
    const pos = e.target.getAttribute("data-pos");
    handleStarColor(pos);
  };

  const handleStarColor = (pos) => {
    document.querySelectorAll("i").forEach((star) => {
      if (star.getAttribute("data-pos") <= pos) {
        star.parentElement.classList.add(styles.active);
      } else {
        star.parentElement.classList.remove(styles.active);
      }
    });
  };

  const renderStars = (length) => {
    const stars = [];
    for (let i = 1; i <= length; i++) {
      stars.push(
        <button
          key={i}
          onClick={handleClick}
          onMouseOver={handleOver}
          onMouseLeave={() => handleStarColor(starValue)}
        >
          <i className="la la-star" data-pos={i}></i>
        </button>
      );
    }

    return stars;
  };

  return <div className={styles.rating__container}>{renderStars(count)}</div>;
}
