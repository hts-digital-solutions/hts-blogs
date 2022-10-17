import React from "react";

import styles from "../styles/components/Popup.module.css";

export default function Popup({ children, show, onClose = () => { } }) {
  return show ? (
    <div className={styles.popup__container}>
      <div className={styles.popup__overlay} onClick={onClose}></div>
      <div className={styles.popup__box}>{children}</div>
    </div>
  ) : null;
}
