import Head from 'next/head'
import React, { useState } from 'react'
import AppContainer from '../../components/AppContainer'
import Button from '../../components/Button'
import FormElements from '../../components/FormElements'
import { profileDataInitials } from '../../initials'

import styles from "../../styles/u/Profile.module.css"
import { _config } from '../../utils/helper_functions'

function Profile() {
    const [actionName, setActionName] = useState('Edit Profile')
    const [readOnly, setReadOnly] = useState(true)
    const [profileData, setProfileData] = useState(profileDataInitials)

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

    const valueSetter = e => {
        const { name, value } = e.target
        setProfileData(prev => ({ ...prev, [name]: value }))
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
                        <div className={`${styles.profile__form} ${styles['grid-3']}`}>
                            <FormElements
                                element='text'
                                name='name'
                                label='Name'
                                placeholder='Enter Your Name'
                                readOnly={readOnly}
                                value={profileData?.name}
                                onChange={valueSetter}
                            />
                            <FormElements
                                element='email'
                                name='email'
                                label='Email'
                                placeholder='Enter Your Email'
                                readOnly={readOnly}
                                value={profileData?.email}
                                onChange={valueSetter}
                            />
                            <FormElements
                                element='text'
                                name='username'
                                label='Username'
                                placeholder='Enter Your Username'
                                readOnly={readOnly}
                                value={profileData?.username}
                                onChange={valueSetter}
                            />
                        </div>
                        <div className={`${styles.profile__form} ${styles['grid-2']}`}>
                            <div className={styles.full}>
                                <FormElements
                                    element='text'
                                    name='website'
                                    label='Website'
                                    placeholder='Enter Your Website Link'
                                    readOnly={readOnly}
                                    value={profileData?.website_url}
                                    onChange={valueSetter}
                                />
                                <FormElements
                                    element='text'
                                    name='location'
                                    label='Location'
                                    placeholder='Enter Your Place'
                                    readOnly={readOnly}
                                    value={profileData?.location}
                                    onChange={valueSetter}
                                />
                            </div>
                            <FormElements
                                element='textarea'
                                name='bio'
                                label='Bio'
                                placeholder='About Yourself'
                                readOnly={readOnly}
                                value={profileData?.bio}
                                onChange={valueSetter}
                                rows={5}
                            />
                        </div>
                    </fieldset>

                    <fieldset className={styles.profile__fieldset}>
                        <legend>Education</legend>
                        <div className={`${styles.profile__form} ${styles['grid-2']}`}>
                            <FormElements
                                element='text'
                                name='education'
                                label='Education'
                                placeholder='Enter Your Education'
                                readOnly={readOnly}
                                value={profileData?.education}
                                onChange={valueSetter}
                            />
                            <FormElements
                                element='text'
                                name='education_institute'
                                label='Education Institute'
                                placeholder='Enter Your Institute'
                                readOnly={readOnly}
                                value={profileData?.education_institute}
                                onChange={valueSetter}
                            />
                        </div>
                    </fieldset>

                    <fieldset className={styles.profile__fieldset}>
                        <legend>Work & Social</legend>
                        <div className={styles.profile__form}>
                            <FormElements
                                element='text'
                                name='work'
                                label='About Work'
                                placeholder='Enter Your Working'
                                readOnly={readOnly}
                                value={profileData?.work}
                                onChange={valueSetter}
                            />
                        </div>
                        <div className={`${styles.profile__form} ${styles['grid-2']}`}>
                            <FormElements
                                element='text'
                                name='facebook_username'
                                label='Facebook Username'
                                placeholder='Enter Your Facebook Username'
                                readOnly={readOnly}
                                value={profileData?.facebook_username}
                                onChange={valueSetter}
                            />
                            <FormElements
                                element='text'
                                name='instagram_username'
                                label='Instagram Username'
                                placeholder='Enter Your Instagram Username'
                                readOnly={readOnly}
                                value={profileData?.instagram_username}
                                onChange={valueSetter}
                            />

                            <FormElements
                                element='text'
                                name='twitter_username'
                                label='Twitter Username'
                                placeholder='Enter Your Twitter Username'
                                readOnly={readOnly}
                                value={profileData?.twitter_username}
                                onChange={valueSetter}
                            />
                            <FormElements
                                element='text'
                                name='linkedin_username'
                                label='LinkedIn Username'
                                placeholder='Enter Your LinkedIn Username'
                                readOnly={readOnly}
                                value={profileData?.linkedin_username}
                                onChange={valueSetter}
                            />
                            <FormElements
                                element='text'
                                name='github_username'
                                label='Github Username'
                                placeholder='Enter Your Github Username'
                                readOnly={readOnly}
                                value={profileData?.github_username}
                                onChange={valueSetter}
                            />
                            <FormElements
                                element='text'
                                name='dev_username'
                                label='DEV Username'
                                placeholder='Enter Your DEV Username'
                                readOnly={readOnly}
                                value={profileData?.dev_username}
                                onChange={valueSetter}
                            />
                        </div>
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