import React from "react";

import styles from "../styles/components/Alert.module.css"

export default function Alert({ type = 'processing', message, icon = '' }) {
  return (
    <div className={`${styles.alert__container} ${styles.show}`}>
      {type === 'processing' && (
        <div className={styles.alert__loading}>
          <span></span>
        </div>
      )}

      <div className={styles.alert__message}>
        {icon && (
          <div className={`${styles.alert__icon} 
          ${type === 'success' ? styles.alert__icon__success : styles.alert__icon__error}`}>
            <i className={icon}></i>
          </div>
        )}
        {message && (
          <div className={styles.alert__message}>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
