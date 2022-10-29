import Script from 'next/script'
import React from 'react'

export default function Stories() {
    return (
        <>
            <Script
                type='application/json'
                onLoad={{
                    "controls": [
                        {
                            "name": "close",
                            "backgroundImageUrl": "data:image\/svg+xml;charset=utf-8,<\/svg>",
                            "position": "start"
                        }
                    ]
                }}
            />
            <amp-story-player layout="fixed" width="100vw" height="100vh">
                <a href="https://preview.amp.dev/documentation/examples/introduction/stories_in_amp/">
                    <img src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg" width="100%" height="100%" loading="lazy" data-amp-story-player-poster-img alt="image" />
                    Stories in AMP - Hello World
                </a>
            </amp-story-player>
        </>

    )
}
