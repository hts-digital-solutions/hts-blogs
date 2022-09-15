import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "../styles/components/TrendingBlogs.module.css";

const trending_blogs = [
  {
    title:
      "Memo To All Housekeeping, Kitchen, and Dining Room Staff At Mar-A-Lago",
    slug: "",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBrZWVwdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Apple’s Next Big Thing: A Business Model Change",
    slug: "",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Ukraine War, 10 September 2022",
    slug: "",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dWtyYWluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Software Component Names Should Be Whimsical And Cryptic",
    slug: "",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8c29mdHdhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "The Difference Between The Clever Developer & The Wise Developer",
    slug: "",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default function TrendingBlogs() {
  return (
    <div className={styles.trending__blog__container}>
      {trending_blogs.map((blog, index) => (
        <div className={styles.blog__item} key={index}>
          <div className={styles.blog__image}>
            <Image
              src={blog?.image}
              alt={blog?.title}
              layout="responsive"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </div>
          <div className={styles.blog__info}>
            <div className={styles.blog__author}>
              <Image
                src="/assets/profile.jpeg"
                width={22}
                height={22}
                objectFit="cover"
                className={styles.author__image}
              />
              <div className={styles.author__title}>
                <Link href="/">
                  <a>
                    <h4>Tridev Sharma</h4>
                  </a>
                </Link>

                <p>May 12, 2022</p>
                <p>4 min read</p>
              </div>
            </div>
            <h3 className="truncate-2">{blog?.title}</h3>
            <p className="truncate-2">{blog?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
