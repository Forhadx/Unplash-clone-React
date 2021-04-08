import React from "react";

import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
  return (
    <React.Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed}  />
        <div
          className="Modal"
          style={{
            opacity: props.show ? "1" : "0",
          }}
        >
          {props.children}
        </div>
      
    </React.Fragment>
  );
};

export default React.memo(modal);
