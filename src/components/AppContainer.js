import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function AppContainer({ children }) {
  return (
    <React.Fragment>
      {/* header */}
      <Header />

      {children}

      {/* footer */}
      <Footer />
    </React.Fragment>
  );
}
