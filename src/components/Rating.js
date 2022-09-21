import React, { useEffect, useRef, useState } from "react";

import styles from "../styles/components/Rating.module.css";

export default function Rating({
  value,
  onChange,
  count = 5,
  readOnly = false,
}) {
  const [starValue, setStarValue] = useState(value);

  useEffect(() => {}, [starValue]);

  const renderStars = (length) => {
    const stars = [];
    for (let i = 1; i <= length; i++) {
      stars.push(
        <Star
          key={i}
          onClick={onChange}
          onHover={setStarValue}
          onLeave={() => setStarValue(value)}
          pos={i}
          readOnly={readOnly}
          className={starValue >= i ? styles.active : ""}
        />
      );
    }

    return stars;
  };

  return <div className={styles.rating__container}>{renderStars(count)}</div>;
}

const Star = ({ className, onClick, onHover, onLeave, pos, readOnly }) => {
  return (
    <button
      onClick={() => (!readOnly ? onClick(pos) : {})}
      onMouseOver={() => (!readOnly ? onHover(pos) : {})}
      onMouseLeave={() => (!readOnly ? onLeave() : {})}
      className={className}
    >
      <i className="la la-star"></i>
    </button>
  );
};
