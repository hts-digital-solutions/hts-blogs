import React from "react";
import Popup from "./Popup";

export default function AllReviews({ show, callback }) {
  return (
    <React.Fragment>
      <Popup show={show} onClose={() => callback(false)}>
        <div>AllReviews</div>
      </Popup>
    </React.Fragment>
  );
}
