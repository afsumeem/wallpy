import React from "react";
import { Offcanvas } from "react-bootstrap";
import { iDrawerBack } from "../../../utils/icons/global_icons";

const Drawer = ({ open, setOpen, children, bgColorCode, ...props }) => {
  return (
    <Offcanvas
      show={open}
      onHide={() => setOpen(false)}
      className="h-100"
      {...props}
      style={{ backgroundColor: "#121212", zIndex: 99999999 }}
    >
      <Offcanvas.Body
        className="h-100"
        style={{ backgroundColor: bgColorCode || "#121212" }}
      >
        <div className="d-flex justify-content-end">
          <button
            onClick={() => setOpen(false)}
            className=""
            style={{ width: "40px", height: "40px" }}
          >
            {iDrawerBack}
          </button>
        </div>
        {children}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Drawer;
