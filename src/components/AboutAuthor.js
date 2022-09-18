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
      </div>
    </div>
  );
}
