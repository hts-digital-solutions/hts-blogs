import Head from "next/head";
import "../styles/globals.css";

import { Provider } from "react-redux"
import store from "../store";
import { useAmp } from "next/amp";

function MyApp({ Component, pageProps }) {
  const isAmp = useAmp()

  return (
    <>
      <Head>
        {!isAmp &&
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
          />
        }

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ff9a33" />
        <meta name="theme-color" content="#ff9a33" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
