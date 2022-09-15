import React from "react";

import styles from "../styles/components/TrendingTopics.module.css";

const topics = [
  {
    image:
      "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Relationship",
    description: "Some information about relationship topic goes here.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604945234148-bea27293bf40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
    title: "Bollywood Boycott",
    description: "Some information about Bollywood Boycott topic goes here.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9saXRpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Indian Politics",
    description: "Some information about Indian Politics topic goes here.",
  },
];

export default function TrendingTopics() {
  return (
    <div className={styles.topics__container}>
      {topics.map((topic, index) => (
        <div className={styles.topics__item} key={index}>
          <div
            className={styles.topics__image}
            style={{ backgroundImage: `url(${topic.image})` }}
          ></div>
          <div className={styles.topics__info}>
            <h3 className="truncate-2">{topic?.title}</h3>
            <p className="truncate-2">{topic?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
