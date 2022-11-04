import Head from 'next/head'
import React, { useState } from 'react'
import AppContainer from '../../components/AppContainer'

import styles from "../../styles/u/Notification.module.css"
import { _config } from '../../utils/helper_functions'

function Notifications() {

    const [filter, setFilter] = useState('unread')
    const [notifications, setNotifications] = useState([])
    const [filteredNotifications, setFilteredNotifications] = useState([])

    const handleFilter = e => {
        setFilter(e.target.getAttribute('data-filter'))
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
            <div className={styles.notification__item}></div>
            <div className={styles.notification__item}></div>
            <div className={styles.notification__item}></div>
            <div className={styles.notification__item}></div>
            <div className={styles.notification__item}></div>
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