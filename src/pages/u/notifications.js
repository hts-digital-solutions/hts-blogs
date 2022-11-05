import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import AppContainer from '../../components/AppContainer'

import styles from "../../styles/u/Notification.module.css"
import { _config } from '../../utils/helper_functions'

const initailNotifications = [
    {
        title: '<p><b>Sanjiv</b> has commented on <b>My First Post</b></p>',
        info: null,
        type: 'comments',
        read: 0,
        timestamp: 1943437463463
    },
    {
        title: '<p><b>Sanjiv</b> has commented on <b>My First Post</b></p>',
        info: {
            title: 'Why India is leaving his remarks everywhere in this world?',
            slug: 'my-first-post',
            image: "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBrZWVwdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        type: 'comments',
        read: 0,
        timestamp: 1943437463463
    },
    {
        title: '<p><b>Sanjiv</b> has commented on <b>My First Post</b></p>',
        info: {
            title: 'Why India is leaving his remarks everywhere in this world?',
            slug: 'my-first-post',
            image: "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBrZWVwdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        type: 'comments',
        read: 0,
        timestamp: 1943437463463
    },
    {
        title: '<p><b>Sanjiv</b> has commented on <b>My First Post</b></p>',
        info: {
            title: 'Why India is leaving his remarks everywhere in this world?',
            slug: 'my-first-post',
            image: "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBrZWVwdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        type: 'comments',
        read: 0,
        timestamp: 1943437463463
    },
    {
        title: '<p><b>Sanjiv</b> has commented on <b>My First Post</b></p>',
        info: {
            title: 'Why India is leaving his remarks everywhere in this world?',
            slug: 'my-first-post',
            image: "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBrZWVwdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        type: 'comments',
        read: 0,
        timestamp: 1943437463463
    },
    {
        title: '<p><b>Sanjiv</b> has commented on <b>My First Post</b></p>',
        info: {
            title: 'Why India is leaving his remarks everywhere in this world?',
            slug: 'my-first-post',
            image: "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBrZWVwdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        type: 'comments',
        read: 0,
        timestamp: 1943437463463
    },
    {
        title: '<p><b>Sanjiv</b> has commented on <b>My First Post</b></p>',
        info: {
            title: 'Why India is leaving his remarks everywhere in this world?',
            slug: 'my-first-post',
            image: "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBrZWVwdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        type: 'comments',
        read: 0,
        timestamp: 1943437463463
    },
    {
        title: '<p><b>Keshav Thakur</b> has liked post <b>My First Post</b></p>',
        info: {
            title: 'How to make your first blog using our platform?',
            slug: 'my-first-post',
            image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

        },
        type: 'posts',
        read: 1,
        timestamp: 1943437463463
    }
]

function Notifications() {

    const [filter, setFilter] = useState('all')
    const [notifications, setNotifications] = useState(initailNotifications)
    const [filteredNotifications, setFilteredNotifications] = useState(initailNotifications)

    const handleFilter = e => {
        const value = e.target.getAttribute('data-filter')
        setFilter(value)
        if (value === 'all') {
            setFilteredNotifications(notifications)
        } else {
            setFilteredNotifications(notifications.filter(n => {
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
                <title>Notifications | {_config("website-name")}</title>
            </Head>
            <div className={styles.notification__wrapper}>
                <h1>Notifications</h1>
                <div className={styles.notification__container}>
                    <div className={styles.notification__filter}>
                        <button onClick={handleFilter} data-filter='all' className={filter === 'all' ? styles.active : ''}>All <span>{notifications.length}</span></button>
                        <button onClick={handleFilter} data-filter='unread' className={filter === 'unread' ? styles.active : ''}>Unread <span>32</span></button>
                        <button onClick={handleFilter} data-filter='read' className={filter === 'read' ? styles.active : ''}>Read <span>50</span></button>
                        <button onClick={handleFilter} data-filter='posts' className={filter === 'posts' ? styles.active : ''}>Posts <span>1</span></button>
                        <button onClick={handleFilter} data-filter='comments' className={filter === 'comments' ? styles.active : ''}>Comments <span>10</span></button>
                        <button onClick={handleFilter} data-filter='topics' className={filter === 'topics' ? styles.active : ''}>Topics <span>2</span></button>
                    </div>
                    <div className={styles.notification__list}>
                        <RenderNotifications notifications={filteredNotifications} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const RenderNotifications = ({ notifications }) => {
    return (
        <div className={styles.notification__list_wrapper}>
            {
                notifications.length > 0
                    ?
                    notifications.map((notification, index) => (
                        <div className={styles.notification__item} key={index}>
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

export default function NotificationsPage() {
    return (
        <AppContainer>
            <Notifications />
        </AppContainer>
    )
}