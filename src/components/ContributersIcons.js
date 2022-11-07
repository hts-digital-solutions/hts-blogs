import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from "../styles/components/ContributerIcons.module.css"

function ContributersIcons({ contributers }) {
    return (
        <div className={styles.contributers__wrapper}>
            {contributers.map((contributer, index) => (
                <Link href={'/'} key={index}>
                    <a className={styles.contributer__image} key={index} style={{ '--index': contributers.length - index }}>
                        <Image
                            src={contributer}
                            alt={'alt-' + index}
                            width={50}
                            height={50}
                            objectFit="contain"
                        />
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default ContributersIcons