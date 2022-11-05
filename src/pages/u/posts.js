import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import AppContainer from '../../components/AppContainer'

import styles from "../../styles/u/Notification.module.css"
import { _config } from '../../utils/helper_functions'


function Posts() {

    const [filter, setFilter] = useState('all')
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])

    const handleFilter = e => {
        const value = e.target.getAttribute('data-filter')
        setFilter(value)
        if (value === 'all') {
            setFilteredPosts(Posts)
        } else {
            setFilteredPosts(Posts.filter(n => {
                if (value !== 'unread' && value !== 'read') {
                    return n.type === value
                } else {
                    return value === 'read' ? n.read === 1 : n.read === 0
                }
            }))
        }
    }

    return (
        <React.Fragment>
            <Head>
                <title>Posts | {_config("website-name")}</title>
            </Head>
            <div className={styles.notification__wrapper}>
                <h1>Posts</h1>
                <div className={styles.notification__container}>
                    <div className={styles.notification__filter}>
                        <button onClick={handleFilter} data-filter='all' className={filter === 'all' ? styles.active : ''}>All <span>{posts.length}</span></button>
                        <button onClick={handleFilter} data-filter='draft' className={filter === 'draft' ? styles.active : ''}>Draft <span>32</span></button>
                        <button onClick={handleFilter} data-filter='published' className={filter === 'published' ? styles.active : ''}>Published <span>50</span></button>
                    </div>
                    <div className={styles.notification__list}>
                        <RenderPosts Posts={filteredPosts} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const RenderPosts = ({ Posts }) => {
    return (
        <div className={styles.notification__list_wrapper}>
            {
                Posts.length > 0
                    ?
                    Posts.map((notification, index) => (
                        <div className={`${styles.notification__item} ${notification?.read === 0 ? styles.unread : ''}`} key={index}>
                            <div className={styles.notification__item_title} dangerouslySetInnerHTML={{ __html: notification?.title }} />
                            <p className={styles.notification__time}>2 days ago</p>
                            {notification?.info && (
                                <div className={styles.notification__item_post_ref}>
                                    <Link href="/">
                                        <a className={styles.notification__item_post}>
                                            <h2 className='truncate-2'>{notification?.info?.title}</h2>
                                            <div className={styles.notification__item_post_img}>
                                                <Image
                                                    src={notification?.info?.image}
                                                    alt={notification?.info?.slug}
                                                    layout="responsive"
                                                    width="100%"
                                                    height="100%"
                                                    objectFit="contain"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))
                    : <NotificationLoader />
            }
        </div>
    )
}

const NotificationLoader = () => {
    return (
        <div className={styles.notification__loader}>
            {
                Array(10).fill(0).map((_, index) => <div className={styles.notification__item} key={index}></div>)
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