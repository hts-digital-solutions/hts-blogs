import Head from "next/head";
import AppContainer from "../../components/AppContainer";
import DiscoverTags from "../../components/DiscoverTags";

import styles from "../../styles/Home.module.css";
import { _config } from "../../utils/helper_functions";


function OurStory() {
    return (
        <>
            <Head>
                <title>Topic | {_config("website-name")}</title>
            </Head>
            <div className={styles.home__container}>
                <div className={`${styles.home__main} ${styles.story_page}`}>
                    <h1>Topic</h1>
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