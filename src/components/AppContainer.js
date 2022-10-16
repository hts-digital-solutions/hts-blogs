import dynamic from "next/dynamic";
import React from "react";
import Alert from "./Alert";
import Footer from "./Footer";

const Header = dynamic(() => import("./Header"), {
  ssr: false,
  loading: () => <HeaderLoader />,
});

export default function AppContainer({ children }) {
  return (
    <React.Fragment>
      {/* header */}
      <Header />

      {children}

      {/* footer */}
      <Footer />
      <Alert type="processing" />
    </React.Fragment>
  );
}

const HeaderLoader = () => {
  return (
    <div style={{ background: "var(--secondary-color)", height: "83px" }}></div>
  );
};
