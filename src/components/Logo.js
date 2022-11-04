import React from "react";

import styles from "../styles/components/Logo.module.css";
import logo from "../../public/assets/hts-logo-w.png";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className={styles.logo__wrapper}>
      <Link href="/">
        <a>
          <Image
            src={logo}
            height={50}
            width={50}
            alt="logo__hts"
            className={styles.logo}
            objectFit="contain"
          />

          <p className={`font-swash ${styles.logo__text}`}>Blogs</p>
        </a>
      </Link>
    </div>
  );
}

export default Logo;
