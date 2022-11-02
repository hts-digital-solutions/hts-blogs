import React from 'react'

import styles from "../styles/components/EditorLoader.module.css"

function EditorLoader() {
    return (
        <div className={styles.editor_loader__container}>
            <div className={styles.editor_loader__tab}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles.editor_loader__content}></div>
        </div>
    )
}

export default EditorLoader