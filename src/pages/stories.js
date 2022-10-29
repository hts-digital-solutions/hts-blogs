
import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import BlankContainer from '../components/BlankContainer'

function WebStories() {
    return (
        <BlankContainer>

            <Head>
                <title>Web Stories</title>
            </Head>
            <Script src='https://cdn.ampproject.org/v0.js' async />
            <Script src='https://cdn.ampproject.org/v0/amp-consent-0.1.js' custom-element="amp-consent" async />
            <Script src='https://cdn.ampproject.org/v0/amp-video-0.1.js' custom-element="amp-video" async />
            <Script src='https://cdn.ampproject.org/v0/amp-story-1.0.js' custom-element="amp-story" async />
            <Script type='application/json' dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "controls": [
                        {
                            "name": "close",
                            "backgroundImageUrl": "data:image\/svg+xml;charset=utf-8,<\/svg>",
                            "position": "start"
                        }
                    ],

                    "behavior": {
                        "on": "end",
                        "action": "fetch",
                        "endpoint": "https://example.com/my-endpoint.json?offset=${offset}"
                    }
                })
            }} />
            <div style={{ overflow: 'hidden', width: '100vw', height: '100vh' }}>

                <amp-story-player layout="fixed" width="100vw" height="100vh">
                    <a href="https://preview.amp.dev/documentation/examples/introduction/stories_in_amp/">
                        <img src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg" width="100%" height="100%" loading="lazy" data-amp-story-player-poster-img alt="image" />
                        Stories in AMP - Hello World
                    </a>
                </amp-story-player>
            </div>
        </BlankContainer>
    )
}


export const config = { amp: true }
export default WebStories