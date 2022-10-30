import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../store/slices/AuthSlice'
import { isSidebarVisible, toggleSidebar } from '../store/slices/EnvironmentSlice'

import styles from "../styles/components/SideNavbar.module.css"

function SideNavbar() {
    const router = useRouter()
    const user = useSelector(getUser)
    const sidebar = useSelector(isSidebarVisible)
    const dispatch = useDispatch()

    const onClose = () => {
        dispatch(toggleSidebar())
    }

    useEffect(() => {
        dispatch(toggleSidebar({ state: 'close' }))
    }, [router?.asPath])

    return (
        <div className={`${styles.sidebar__container} ${sidebar ? styles.active : ''}`}>
            <button className={styles.sidebar__close} onClick={onClose}>
                <i className="la la-times"></i>
            </button>
            <div className={styles.sidebar__notification}>
                <Link href="/u/notifications">
                    <a>
                        <i className='la la-bell'></i>
                        <span>20</span>
                    </a>
                </Link>
            </div>
            <div className={styles.sidebar__profile}>
                <div className={styles.sidebar__profile_img}>
                    <Image
                        src={user?.image}
                        alt={user?.name}
                        width={100}
                        height={100}
                        objectFit="contain"
                    />
                </div>
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
            </div>

            <div className={styles.sidebar__navigation}>
                <ul>
                    <li>
                        <Link href="/u/profile">
                            <a> <i className='la la-user'></i> Profile</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/u/posts">
                            <a><i className='la la-feather'></i> Posts <span>32</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/u/topics">
                            <a><i className='la la-sms'></i> Topics <span>2</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/u/settings">
                            <a><i className='la la-cog'></i> Settings</a>
                        </Link>
                    </li>
                    <li>
                        <a><i className='la la-sign-out-alt'></i> Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNavbar