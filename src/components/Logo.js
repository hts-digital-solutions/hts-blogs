import React from "react";

import styles from "../styles/components/Logo.module.css";
import logo from "../../public/hts-logo-small.png";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className={styles.logo__wrapper}>
      <Link href="/">
        <a>
          <Image
            src={logo}
            height={70}
            width={80}
            alt="logo__hts"
            // layout="responsive"
            objectFit="contain"
          />
        </a>
      </Link>
    </div>
  );
}

export default Logo;
