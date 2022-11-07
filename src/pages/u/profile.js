import Head from 'next/head'
import React, { useState } from 'react'
import AppContainer from '../../components/AppContainer'
import Button from '../../components/Button'

import styles from "../../styles/u/Profile.module.css"
import { _config } from '../../utils/helper_functions'

function Profile() {
    const [actionName, setActionName] = useState('Edit Profile')
    const [readOnly, setReadOnly] = useState(true)

    const changeAction = e => {
        e.preventDefault()
        if (actionName === 'Edit Profile') {
            setActionName('Update Profile')
            setReadOnly(false)
            handleProfileUpdate(e)
        } else {
            setActionName('Edit Profile')
            setReadOnly(true)
        }
    }

    const handleProfileUpdate = e => {
        e.preventDefault()

    }

    return (
        <React.Fragment>
            <Head>
                <title>Profile | {_config("website-name")}</title>
            </Head>
            <div className={styles.profile__wrapper}>
                <form onSubmit={handleProfileUpdate}>
                    <div className={styles.profile__action}>
                        <h1>Profile</h1>
                        <Button
                            onClick={changeAction}
                            title={actionName} theme={actionName === 'Edit Profile' ? 'secondary' : 'primary'} />
                    </div>

                    <fieldset className={styles.profile__fieldset}>
                        <legend>Personal</legend>
                        <div className={styles.profile__personal_form}>
                            <div className={styles.profile__input}>
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    readOnly={readOnly}
                                    disabled={readOnly}
                                />
                            </div>
                            <div className={styles.profile__input}>
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    readOnly={readOnly}
                                    disabled={readOnly}
                                />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className={styles.profile__fieldset}>
                        <legend>Education</legend>
                    </fieldset>

                    <fieldset className={styles.profile__fieldset}>
                        <legend>Work</legend>
                    </fieldset>
                </form>
            </div>
        </React.Fragment>
    )
}

export default function ProfilePage() {
    return (
        <AppContainer>
            <Profile />
        </AppContainer>
    )
}