import React from "react";
import Link from "next/link";

import styles from "../styles/components/Button.module.css";

function Button({
  title,
  theme = "primary",
  link = false,
  icon = "",
  spacingX = 0.2,
  spacingY = 0.2,
  onClick = () => {},
}) {
  return (
    <React.Fragment>
      {link ? (
        <Link href={link}>
          <a
            style={{
              margin: `${spacingY}rem ${spacingX}rem`,
            }}
            className={`${styles.button} ${
              icon ? styles.button__icon_res : ""
            } ${theme === "primary" ? styles.primary : styles.secondary}`}
          >
            <span className={`${icon && styles.button__text}`}>{title}</span>
            {icon && (
              <span className={styles.button__icon}>
                <i className={icon}></i>
              </span>
            )}
          </a>
        </Link>
      ) : (
        <button
          style={{
            margin: `${spacingY}rem ${spacingX}rem`,
          }}
          onClick={onClick}
          className={`${styles.button}  ${
            icon ? styles.button__icon_res : ""
          } ${theme === "primary" ? styles.primary : styles.secondary}`}
        >
          <span className={`${icon && styles.button__text}`}>{title}</span>
          {icon && (
            <span className={styles.button__icon}>
              <i className={icon}></i>
            </span>
          )}
        </button>
      )}
    </React.Fragment>
  );
}

export default Button;
