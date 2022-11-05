import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import AppContainer from '../../components/AppContainer'
import Button from '../../components/Button'

import styles from "../../styles/u/Common.module.css"
import { _config } from '../../utils/helper_functions'


const initialPosts = [
    {
        title:
            "Memo To All Housekeeping, Kitchen, and Dining Room Staff At Mar-A-Lago",
        slug: "/sample-blog",
        type: 'published',
        topic: 'Development',
        description: "Let's know, how people are going to target goverment.",
        image:
            "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBrZWVwdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        title: "Apple’s Next Big Thing: A Business Model Change",
        slug: "/sample-blog",
        type: 'published',
        topic: 'Development',
        description: "Let's know, how people are going to target goverment.",
        image:
            "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
        title: "Ukraine War, 10 September 2022",
        slug: "/sample-blog",
        type: 'draft',
        topic: 'Politics',
        description: "Let's know, how people are going to target goverment.",
        image:
            "https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dWtyYWluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        title: "Software Component Names Should Be Whimsical And Cryptic",
        slug: "/sample-blog",
        type: 'draft',
        topic: '',
        description: "Let's know, how people are going to target goverment.",
        image:
            "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8c29mdHdhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        title: "The Difference Between The Clever Developer & The Wise Developer",
        slug: "/sample-blog",
        type: 'published',
        topic: '',
        description: "Let's know, how people are going to target goverment.",
        image:
            "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
];

function Posts() {

    const [filter, setFilter] = useState('all')
    const [posts, setPosts] = useState(initialPosts)
    const [filteredPosts, setFilteredPosts] = useState(initialPosts)

    const handleFilter = e => {
        const value = e.target.getAttribute('data-filter')
        setFilter(value)
        if (value === 'all') {
            setFilteredPosts(posts)
        } else {
            setFilteredPosts(posts.filter(p => p.type === value))
        }
    }

    return (
        <React.Fragment>
            <Head>
                <title>Posts | {_config("website-name")}</title>
            </Head>
            <div className={styles.container__wrapper}>
                <h1>Posts</h1>
                <div className={styles.container__container}>
                    <div className={styles.container__filter}>
                        <button onClick={handleFilter} data-filter='all' className={filter === 'all' ? styles.active : ''}>All <span>{posts.length}</span></button>
                        <button onClick={handleFilter} data-filter='draft' className={filter === 'draft' ? styles.active : ''}>Draft <span>0</span></button>
                        <button onClick={handleFilter} data-filter='published' className={filter === 'published' ? styles.active : ''}>Published <span>0</span></button>
                    </div>
                    <div className={styles.container__list}>
                        <RenderPosts posts={filteredPosts} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const RenderPosts = ({ posts }) => {
    return (
        <div className={styles.container__list_wrapper}>
            {
                posts.length > 0
                    ?
                    posts.map((post, index) => (
                        <div className={`${styles.container__item} ${styles.container__post}`} key={index}>
                            <div className={styles.container__item_img} >
                                <Image
                                    src={post?.image}
                                    alt={post?.slug}
                                    layout="responsive"
                                    width="100%"
                                    height="100%"
                                    objectFit='cover'
                                />
                            </div>
                            <div className={styles.container__item_content} >
                                <Link href={post?.slug}>
                                    <a><h2 className='truncate'>{post?.title}</h2></a>
                                </Link>
                                <p className='truncate'>{post?.description}</p>
                                <p><span>4 days ago</span> {post?.topic && <>in <span>{post?.topic}</span></>}</p>
                            </div>
                            <div className={styles.container__item_action} >
                                <Button title={<i className="la la-trash"></i>} />
                                <Button title={<i className="la la-pen"></i>} theme="secondary" />
                            </div>
                        </div>
                    ))
                    : <PostsLoader />
            }
        </div>
    )
}

const PostsLoader = () => {
    return (
        <div className={styles.container__loader}>
            {
                Array(6).fill(0).map((_, index) => (
                    <div className={styles.container__item} key={index}>
                        <div className={styles.container__item_img} />
                        <div className={styles.container__item_content} />
                        <div className={styles.container__item_action} />
                    </div>
                ))
            }
        </div>
    )
}

export default function PostsPage() {
    return (
        <AppContainer>
            <Posts />
        </AppContainer>
    )
}