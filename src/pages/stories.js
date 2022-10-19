
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import BlankContainer from '../components/BlankContainer'
import Stories from '../components/Stories'

function WebStories() {
    return (
        <BlankContainer>
            <Script src='https://cdn.ampproject.org/v0.js' async />
            <Script src='https://cdn.ampproject.org/v0/amp-consent-0.1.js' custom-element="amp-consent" async />
            <Script src='https://cdn.ampproject.org/v0/amp-video-0.1.js' custom-element="amp-video" async />
            <Script src='https://cdn.ampproject.org/v0/amp-story-1.0.js' custom-element="amp-story" async />
            <Head>
                <title>Web Stories</title>
            </Head>
            <div style={{ overflow: 'hidden', width: '100vw', height: '100vh' }}>
                <Stories />
            </div>
        </BlankContainer>
    )
}


export const config = { amp: true }
export default WebStories