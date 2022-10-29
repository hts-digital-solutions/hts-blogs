import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../store/slices/AuthSlice'
import { isSidebarVisible, toggleSidebar } from '../store/slices/EnvironmentSlice'

import styles from "../styles/components/SideNavbar.module.css"

function SideNavbar() {

    const user = useSelector(getUser)
    const sidebar = useSelector(isSidebarVisible)
    const dispatch = useDispatch()

    const onClose = () => {
        dispatch(toggleSidebar())
    }

    return (
        <div className={`${styles.sidebar__container} ${sidebar ? styles.active : ''}`}>
            <button className={styles.sidebar__close} onClick={onClose}>
                <i className="la la-times"></i>
            </button>
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
        </div>
    )
}

export default SideNavbar