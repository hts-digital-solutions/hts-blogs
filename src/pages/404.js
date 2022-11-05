import Head from "next/head";
import Image from "next/image";
import AppContainer from "../components/AppContainer";
import Button from "../components/Button";
import DiscoverTags from "../components/DiscoverTags";

import styles from "../styles/Home.module.css";
import { _config } from "../utils/helper_functions";


function OurStory() {
    return (
        <>
            <Head>
                <title>404 Page not found | {_config("website-name")}</title>
            </Head>
            <div className={styles.home__container}>
                <div className={`${styles.home__main} ${styles.story_page}`}>
                    <h1 hidden>Page not found</h1>
                    <div style={{
                        display: 'flex', alignItems: 'center', flexDirection: 'column',
                        width: '100%', justifyContent: 'center'
                    }}>
                        <Image
                            src="/assets/404.webp"
                            alt="404"
                            objectFit="contain"
                            width={400}
                            height={400}
                        />

                        <div style={{ marginTop: '2rem' }}>
                            <Button
                                title="Go to Home"
                                link="/"
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.home__most_used_tags} ${styles.story_page}`}>
                    <h2>Discover what people love</h2>

                    <DiscoverTags />
                </div>
            </div>
        </>
    );
}

export default function OurStoryPage() {
    return (
        <AppContainer>
            <OurStory />
        </AppContainer>
    )
}