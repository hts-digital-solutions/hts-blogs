
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import BlankContainer from '../components/BlankContainer'

const Stories = dynamic(() => import("../components/Stories"), {
    ssr: false,
    loading: () => <StoryLoader />
})

function WebStories() {
    return (
        <BlankContainer>
            <Script src='https://cdn.ampproject.org/v0.js' async />
            <Script src='https://cdn.ampproject.org/v0/amp-video-0.1.js' custom-element="amp-video" async />
            <Script src='https://cdn.ampproject.org/v0/amp-story-1.0.js' custom-element="amp-story" async />
            <Head>
                <title>Web Stories</title>
            </Head>

            <Stories />
        </BlankContainer>
    )
}

const StoryLoader = () => {
    return <div style={{ height: "100vh", width: '100%', background: 'var(--gray)' }}></div>
}

export default WebStories