import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/components/Navigation.module.css";

function Navigation() {
  const router = useRouter();

  return (
    <nav className={styles.navigation__wrapper}>
      <ul className={styles.navigation__menu}>
        <li>
          <Link href="/">
            <a
              className={router.pathname === "/" ? styles.active : ""}
            >
              <span className={styles.navigation__menu__icon}>
                <i className="la la-home"></i>
              </span>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/explore">
            <a className={router.pathname === "/explore" ? styles.active : ""}>
              <span className={styles.navigation__menu__icon}>
                <i className="la la-wpexplorer"></i>
              </span>
              Explore
            </a>
          </Link>
        </li>

        <li>
          <Link href="/post">
            <a className={router.pathname === "/post" ? styles.active : ""}>
              <span className={styles.navigation__menu__icon}>
                <i className="la la-feather"></i>
              </span>
              Post
            </a>
          </Link>
        </li>
        <li>
          <Link href="/top-authors">
            <a
              className={
                router.pathname === "/top-authors" ? styles.active : ""
              }
            >
              <span className={styles.navigation__menu__icon}>
                <i className="la la-users"></i>
              </span>
              Top Authors
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
