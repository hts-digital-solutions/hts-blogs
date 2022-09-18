import React from "react";
import BlogItem from "./BlogItem";

import styles from "../styles/Home.module.css";

const blogs = [
  {
    title:
      "Memo To All Housekeeping, Kitchen, and Dining Room Staff At Mar-A-Lago",
    slug: "/sample-blog",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBrZWVwdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Apple’s Next Big Thing: A Business Model Change",
    slug: "/sample-blog",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Ukraine War, 10 September 2022",
    slug: "/sample-blog",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dWtyYWluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default function RelatedPosts() {
  return (
    <div className={styles.related__blogs}>
      {blogs.map((blog, index) => (
        <BlogItem key={index} blog={blog} />
      ))}
    </div>
  );
}
