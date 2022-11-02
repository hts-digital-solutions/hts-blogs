import Head from 'next/head'
import React from 'react'
import AppContainer from '../../components/AppContainer'

import styles from "../../styles/u/Notification.module.css"
import { _config } from '../../utils/helper_functions'

function Notifications() {
    return (
        <React.Fragment>
            <Head>
                <title>Notifications | {_config("website-name")}</title>
            </Head>
            <div className={styles.notification__wrapper}>
                <h1>Notifications</h1>
                <div className={styles.notification__container}>
                    <div className={styles.notification__filter}>
                        <button>Unread <span>32</span></button>
                        <button>Read <span>50</span></button>
                        <button>Posts <span>1</span></button>
                        <button>Comments <span>10</span></button>
                        <button>Topics <span>2</span></button>
                    </div>
                    <div className={styles.notification__list}></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default function NotificationsPage() {
    return (
        <AppContainer>
            <Notifications />
        </AppContainer>
    )
}