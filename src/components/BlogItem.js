import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "../styles/components/BlogItem.module.css";

export default function BlogItem({ blog }) {
  return (
    <div className={styles.blogitem__container}>
      <div className={styles.blogitem__image}>
        <Link href={blog.slug}>
          <a>
            <Image
              src={blog?.image}
              alt={blog?.title}
              layout="responsive"
              objectFit="cover"
              height="100%"
              width="100%"
            />
          </a>
        </Link>
      </div>
      <div className={styles.blogitem__info}>
        <div className={styles.blogitem__author_info}>
          <div>
            <Image
              src="/assets/profile.png"
              width={22}
              height={22}
              alt='blogitem'
              objectFit="cover"
              className={styles.author__image}
            />
            <Link href="/">
              <a>
                <h4>Tridev Sharma</h4>
              </a>
            </Link>
          </div>
          <div>
            <p>May 12</p>
            <p>4 min read</p>
          </div>
        </div>
        <div className={styles.blogitem__content}>
          <Link href={blog.slug}>
            <a>
              <h4 className="truncate-2">{blog?.title}</h4>
            </a>
          </Link>
          <p className="truncate-2">{blog?.description}</p>
        </div>
      </div>
    </div>
  );
}
