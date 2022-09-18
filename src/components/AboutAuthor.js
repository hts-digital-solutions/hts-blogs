import Image from "next/image";
import React from "react";

import styles from "../styles/components/AboutAuthor.module.css";

export default function AboutAuthor({ author }) {
  return (
    <div className={styles.about_author__container}>
      <Image
        src={author?.image || ""}
        alt={author?.name}
        width={120}
        height={120}
        className={styles.about_author__image}
        objectFit="cover"
      />
      <div className={styles.about_author__info}>
        <h3>{author?.name}</h3>
        <p>{author?.about}</p>
        <div className={styles.author__info}>
          <div className={styles.author__social}>
            <i className="la la-facebook"></i>
            <i className="la la-twitter"></i>
            <i className="la la-linkedin"></i>
            <i className="la la-instagram"></i>
            <i className="la la-github"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
