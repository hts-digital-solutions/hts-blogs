import Head from "next/head";
import Image from "next/image";
import React from "react";
import AppContainer from "../../components/AppContainer";
import BlogItem from "../../components/BlogItem";

import styles from "../../styles/Tag.module.css"


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
  {
    title: "Software Component Names Should Be Whimsical And Cryptic",
    slug: "/sample-blog",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8c29mdHdhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "The Difference Between The Clever Developer & The Wise Developer",
    slug: "/sample-blog",
    description: "Let's know, how people are going to target goverment.",
    image:
      "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

function Tag({ tag }) {

  return (
    <React.Fragment>
      <Head>
        <title>{tag.replace("-", " ")}</title>
      </Head>
      <div className={styles.tag__wrapper}>
        <div className={styles.tag__left}>

        </div>
        <div className={styles.tag__right}>
          <div className={styles.tag__about__container}>
            <div className={styles.tag__icon}>
              <Image
                src={`https://source.unsplash.com/random/128x128?${tag}`}
                alt={tag}
                width={80}
                height={80}
                objectFit="contain"
              />
            </div>
            <div className={styles.tag__about}>
              <h1 className={styles.tag__about_title}>{tag.replace("-", " ")}</h1>
              <p>A JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
            </div>
          </div>

          <div className={styles.tag__posts}>
            {blogs?.map((blog, index) => (
              <BlogItem key={index} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      tag: params.slug
    }
  }
}

export default function TagPage(props) {
  return (
    <AppContainer>
      <Tag {...props} />
    </AppContainer>
  )
}