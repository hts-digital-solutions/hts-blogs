import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFollowing } from '../store/slices/AuthSlice'
import { setAlertInfo } from '../store/slices/EnvironmentSlice'

import styles from "../styles/components/Author.module.css"
import Button from './Button'

function Author({ author }) {

    const iFollows = useSelector(getFollowing)
    const dispatch = useDispatch()
    const [following, setFollowing] = useState(false)

    const onClickFollow = () => {
        dispatch(setAlertInfo({
            data: {
                type: "processing",
            }
        }));

        setTimeout(() => {
            dispatch(setAlertInfo({
                data: {
                    type: "success",
                    icon: 'la la-check',
                    message: following ? 'You followed him successfully.' : 'You unfollwed him.'
                }
            }));

            setFollowing(prev => !prev)
        }, 1000)
    }

    useEffect(() => {
        setFollowing(iFollows.indexOf(author?.id) !== -1)
    }, [])

    return (
        <div className={styles.author__wrapper}>
            <div className={styles.author__info}>
                <div className={styles.author__image}>
                    <Image
                        src={author?.profile_image ?? ''}
                        alt={author?.name || 'user'}
                        height={150}
                        width={150}
                        objectFit="cover"
                    />
                </div>
                <div className={styles.author__details}>
                    <h2 className='truncate'>{author?.name}</h2>
                    <p className={styles.author__work}>{author?.work}</p>
                    <p className={`${styles.author__bio} truncate-3`}>{author?.bio}</p>
                </div>
            </div>
            <div className={styles.author__social}>
                <p className={styles.author__posts_stat}>{author?.total_posts} <small>posts</small></p>
                <Button title={following ? 'Following' : 'Follow'} onClick={onClickFollow} theme={!following ? 'primary' : 'secondary'} />
                <div className={styles.author__links}>
                    <div className={styles.author__link}>
                        <i className='la la-linkedin'></i>
                    </div>
                    <div className={styles.author__link}>
                        <i className='la la-github'></i>
                    </div>
                    <div className={styles.author__link}>
                        <i className='lab la-dev'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Author