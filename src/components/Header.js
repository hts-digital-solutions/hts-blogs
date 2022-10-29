import React from "react";
import { useRouter } from "next/router";

import styles from "../styles/components/Header.module.css";
import Button from "./Button";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../store/slices/AuthSlice";
import Image from "next/image";
import SideNavbar from "./SideNavbar";
import { toggleSidebar } from "../store/slices/EnvironmentSlice";

export default function Header() {
  const router = useRouter();

  const auth = useSelector(getAuth)
  const dispatch = useDispatch()

  const onProfileClick = () => {
    dispatch(toggleSidebar())
  }

  return (
    <header className={`${styles.header__wrapper} ${styles.header__sticky}`}>
      {navigator.userAgent.includes("Mobile") && router.pathname !== "/" && (
        <div className={styles.header__back} onClick={() => router.back()}>
          <i className="la la-arrow-left"></i>
        </div>
      )}
      <div className={styles.header__wrapper__left}>
        <Logo />
      </div>
      <div className={styles.header__wrapper__right}>
        <Navigation />

        <div className={styles.header__buttons}>
          {auth.isLoggedIn ? (
            <button className={styles.header__user} onClick={onProfileClick}>
              <Image
                src={auth.user.image}
                alt=""
                width={48}
                height={48}
                objectFit="contain"
              />
            </button>
          ) : (
            <>
              <Button title="Login" theme="light" link="/login" icon="la la-user" />
              <Button
                title="Signup"
                theme="primary"
                link="/signup"
                icon="la la-user-plus"
              />
            </>
          )}

        </div>
      </div>

      {auth.isLoggedIn && <SideNavbar />}
    </header>
  );
}
