import Link from "next/link";
import React from "react";

import styles from "../styles/components/DiscoverTags.module.css";

const tags = [
  {
    title: "Indian Politics",
    slug: "indian-politics",
  },
  {
    title: "Boycott Bollywood",
    slug: "boycott-bollywood",
  },
  {
    title: "Aadipurush Trailor",
    slug: "aadipurush-trailor",
  },
  {
    title: "Node Js",
    slug: "node-js",
  },
  {
    title: "Meta Information Leak",
    slug: "meta-information-leak",
  },
  {
    title: "Our History",
    slug: "our-history",
  },
];

export default function DiscoverTags() {
  return (
    <div className={styles.tags__container}>
      {tags.map((tag, index) => (
        <Link key={index} href={`/tag/${tag?.slug}`}>
          <a className={styles.tags__item}>
            <h3>#{tag.title}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
