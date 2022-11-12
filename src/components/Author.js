import Image from 'next/image'
import React from 'react'

import styles from "../styles/components/Author.module.css"
import Button from './Button'

function Author({ author }) {
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
                <Button title='Follow' />
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