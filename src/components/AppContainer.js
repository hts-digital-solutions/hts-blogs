import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAlertInfo } from "../store/slices/EnvironmentSlice";
import { notify } from "../utils/helper_functions";
import Alert from "./Alert";
import Footer from "./Footer";

const Header = dynamic(() => import("./Header"), {
  ssr: false,
  loading: () => <HeaderLoader />,
});

const showNotification = (dispatch, notification, router) => {
  navigator.serviceWorker.register('sw.js', {
    scope: '/',
  });
  if (!("Notification" in window)) {
    dispatch(setAlertInfo({
      data: {
        type: 'error',
        message: 'This browser does not support desktop notification.',
        icon: 'la la-times',
      }
    }))
  } else if (Notification.permission === "granted") {
    notify(notification, router)
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        notify(notification, router)
      }
    });
  }
}

export default function AppContainer({ children }) {

  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    const notification = {
      body: 'Juhi has liked your post. Please check your post for more details.',
      icon: '/hts-logo-small-t.png',
      url: '/u/notifications'
    }

    notification && showNotification(dispatch, notification, router)
  }, [])

  return (
    <React.Fragment>
      {/* header */}
      <Header />

      {children}

      {/* footer */}
      <Footer />
      <Alert />
    </React.Fragment>
  );
}

const HeaderLoader = () => {
  return (
    <div style={{ background: "var(--secondary-color)", height: "66px" }}></div>
  );
};
