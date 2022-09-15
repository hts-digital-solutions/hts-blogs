import Image from "next/image";
import React from "react";

import styles from "../styles/components/TrendingBlogs.module.css";

const trending_blogs = [
  {
    title: "People are targeting goverment?",
    slug: "",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=806&q=80",
  },
];

export default function TrendingBlogs() {
  return (
    <div className={styles.trending__blog__container}>
      <div className={styles.trending__blog__first_row}>
        <div className={styles.trending__first_item}>
          <div className={styles.trending_image}>
            <Image
              src={trending_blogs[0]?.image ?? ""}
              alt={trending_blogs[0]?.title ?? ""}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <h3>{trending_blogs[0]?.title ?? ""}</h3>
          <p>{trending_blogs[0]?.description ?? ""}</p>
        </div>
        <div className={styles.trending__first_item}>
          <div className={styles.trending_image}>
            <Image
              src={trending_blogs[0]?.image ?? ""}
              alt={trending_blogs[0]?.title ?? ""}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <h3>{trending_blogs[0]?.title ?? ""}</h3>
          <p>{trending_blogs[0]?.description ?? ""}</p>
        </div>
        <div className={styles.trending__first_item}>
          <div className={styles.trending_image}>
            <Image
              src={trending_blogs[0]?.image ?? ""}
              alt={trending_blogs[0]?.title ?? ""}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <h3>{trending_blogs[0]?.title ?? ""}</h3>
          <p>{trending_blogs[0]?.description ?? ""}</p>
        </div>
      </div>
      <div className={styles.trending__blog__second_row}>
        <div className={styles.trending__second_item}>
          <h3>{trending_blogs[0]?.title ?? ""}</h3>
          <p>{trending_blogs[0]?.description ?? ""}</p>
        </div>
        <div className={styles.trending__second_item}>
          <h3>{trending_blogs[0]?.title ?? ""}</h3>
          <p>{trending_blogs[0]?.description ?? ""}</p>
        </div>
      </div>
    </div>
  );
}
