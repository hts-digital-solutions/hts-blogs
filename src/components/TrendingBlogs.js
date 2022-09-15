import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "../styles/components/TrendingBlogs.module.css";

export default function TrendingBlogs({ trendingBlogs }) {
  return (
    <div className={styles.trending__blog__container}>
      {trendingBlogs.map((blog, index) => (
        <div className={styles.blog__item} key={index}>
          <div className={styles.blog__image}>
            <Link href={blog.slug}>
              <a>
                <Image
                  src={blog?.image}
                  alt={blog?.title}
                  layout="responsive"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </a>
            </Link>
          </div>
          <div className={styles.blog__info}>
            <div className={styles.blog__author}>
              <div className={styles.author__title}>
                <Image
                  src="/assets/profile.jpeg"
                  width={22}
                  height={22}
                  objectFit="cover"
                  className={styles.author__image}
                />
                <Link href="/">
                  <a>
                    <h4>Tridev Sharma</h4>
                  </a>
                </Link>
              </div>
              <div className={styles.blog__read}>
                <p>May 12, 2022</p>
                <p>4 min read</p>
              </div>
            </div>
            <Link href={blog.slug}>
              <a>
                <h3 className="truncate-2">{blog?.title}</h3>
              </a>
            </Link>
            <p className="truncate-2">{blog?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
