import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAlertInfo } from "../store/slices/EnvironmentSlice";
import { notify, _config } from "../utils/helper_functions";
import Alert from "./Alert";
import Footer from "./Footer";

const Header = dynamic(() => import("./Header"), {
  ssr: false,
  loading: () => <HeaderLoader />,
});

const showNotification = (dispatch, notification, router) => {
  const url = process.env.NODE_ENV === 'development' ? _config('baseUrlDev') : _config('baseUrl')
  navigator.serviceWorker.register(url + '/sw.js');
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
      data: '/u/notifications'
    }

    // notification && showNotification(dispatch, notification, router)
  }, [])

  return (
    <React.Fragment>
      {/* header */}
      <Header />

      <main>
        {children}
      </main>

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
