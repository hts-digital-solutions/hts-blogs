import React from "react";

import styles from "../styles/components/Logo.module.css";
import logo from "../../public/logo_horizontal.png";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className={styles.logo__wrapper}>
      <Link href="/home">
        <Image
          src={logo}
          alt="logo__hts"
          layout="responsive"
          objectFit="contain"
        />
      </Link>
    </div>
  );
}

export default Logo;